import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrementProdAll } from '../features/cart/prodSlice';
import { decrementAll } from '../features/cart/counterSlice';
import { emptyCart } from '../features/cart/cartSlice';

import OrderDesktop from './order_desktop';
import OrderConfirmation from './order_confirmation';

import { apiUrl } from './utils';


let productsPrice = 0;
let deliveryPrice = 0;
let totalPrice = 0;

let products = [];
let commandID = 0;

export default function Order() {
    
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);
    const [country, setCountry] = useState('Republica Moldova');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [order, setOrder] = useState('');
    const [lastOrder, setLastOrder] = useState('');

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const inCart = useSelector((state) => state.cart.items);
    const count = useSelector((state) => state.prodCart.items);

    useEffect(() => {
        fetch(apiUrl() + '/sales/lastorder/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(result => setLastOrder(result))
        .catch(error => console.log(error))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setValidated(true)

        let priceSplit = window.location.pathname.split('/');
        productsPrice = parseInt(priceSplit[4]);
        deliveryPrice = parseInt(priceSplit[5]);
        totalPrice = productsPrice + deliveryPrice;

        inCart.map(productInCart => {
            let control = false;
            let quantity = '';
            let total_price = '';

            count.map(productCount => {
                if (productInCart.id === productCount.id) {
                    control = true;
                    quantity = productCount.value;
                    total_price = productCount.value * productInCart.price;
                }
            })
                if (control) {
                    products.push({
                        'id': productInCart.id,
                        'title': productInCart.title,
                        'quantity': quantity,
                        'price': productInCart.price,
                        'total_price': total_price,
                    })
                } else {
                    products.push({
                        'id': productInCart.id,
                        'title': productInCart.title,
                        'quantity': 1,
                        'price': productInCart.price,
                        'total_price': productInCart.price,
                    })
                }
        })

        lastOrder.map(field => {
            commandID = field.id + 1
        })

        if (checked) {
            fetch(apiUrl() + '/sales/orders/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    command_id: commandID,
                    first_name: firstName,
                    last_name: lastName,
                    telephone: telephone,
                    email: email,
                    country: country,
                    region: document.getElementById('region').value,
                    city: city,
                    address: address,
                    products: products,
                })
            })
            .then(res => res.text())
            .then(result => setOrder(result))
            .catch(error => console.log(error))

            fetch(apiUrl() + '/orderemail/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    products: products,
                    command_id: commandID,
                    first_name: firstName,
                    last_name: lastName,
                    telephone: telephone,
                    email: email,
                    country: country,
                    region: document.getElementById('region').value,
                    city: city,
                    address: address,
                    products_price: productsPrice,
                    delivery_price: deliveryPrice,
                    total_price: totalPrice,
                }),
            })
            // .then(res => res.text())
            // .then(result => setResultEmail(result))
            // .catch(error => console.log(error))

            dispatch(emptyCart());
            dispatch(decrementAll());
            dispatch(decrementProdAll());
        }
    }

    const modifWindow = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    window.addEventListener(
        'resize', modifWindow
    )

    if (
        order.includes('id') &&
        order.includes('command_id') &&
        order.includes('first_name') &&
        order.includes('last_name') &&
        order.includes('telephone') &&
        order.includes('email') &&
        order.includes('region') &&
        order.includes('city') &&
        order.includes('address')
    ){
        // window.location.pathname = '/breadcrumb/CONFIRMARE/VINZARI/'
        return(
            <OrderConfirmation
                commandID={commandID}
                firstName={firstName}
                lastName={lastName}
                telephone={telephone}
                email={email}
                country={country}
                region={document.getElementById('region').value}
                city={city}
                address={address}
                productsPrice={productsPrice}
                deliveryPrice={deliveryPrice}
                totalPrice={totalPrice}
                products={products}
            />
        )
    } else {
        return(
            <div>
                <div style={{
                    textAlign: 'center',
                    margin: '4% 0 0 0'
                }}>
                    <h3>INTRODUCETI DATELE CU PRIVIRE LA ADRESA SI NUMELE DVS.</h3>
                </div>
                <Form
                    style={{
                        margin: '1% 20% 4% 20%'
                    }}
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <OrderDesktop />

                    <Form.Group className='mb-3'>
                        <Form.Check 
                            required
                            type='checkbox' 
                            label='Termeni si conditii'
                            onChange={e => setChecked(e.target.checked)}
                        />
                        <p>
                            In urma inregistrarii datelor dumneavaostra
                            va vom contacta
                            pentru a stabili modalitatea de plata si trimitere a produsului.
                            <br />
                            Garantam discretia si nedistribuirea datelor cu caracter personal.
                        </p>
                    <Form.Control.Feedback type='invalid'>
                        Acceptati termenii si conditiile
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Button 
                        type='submit' 
                        variant='success'
                        className='login_btn'
                        // onClick={() => console.log(count)}
                    >
                        Trimiteti date
                    </Button>
                </Form>
            </div>
        )
    }
}