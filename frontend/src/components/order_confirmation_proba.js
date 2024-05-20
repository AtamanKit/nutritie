export default function OrderConfirmationProba(props) {
    return(
        <div
            style={{
                textAlign: 'center',
                margin: '8% 10% 5% 10%',
                color: 'rgb(80, 80, 80)',
            }}
        >
            <h1 style={{
                    backgroundColor: '#187847',
                    color: '#ffffff',
                    textAlign: 'center',
                    padding: '3% 0 3% 0',
                }}
            >
                CONFIRMARE COMANDA
            </h1>
            <h3 style={{
                    padding: '0 0 0 1rem',
                    color: '#a61c1c',
                    margin: '5% 0 0 0',
                }}
            >
                ID comanda: {props.commandID}
            </h3>
            <p style={{margin: '0 0 2% 0', color: 'gray'}}>
                Aceasta pagina reprezinta confirmarea comenzii pentru urmatoarele produse:
            </p>
            <table className='order-confirmation-table-1'>
                <tr style={{backgroundColor: '#dddddd'}}>
                    <th>Produs</th>
                    <th>ID produs</th>
                    <th>Cantitate</th>
                    <th>Pret, unitate</th>
                    <th>Pret, total</th>
                </tr>
                {/* {
                    props.products.map(product => 
                        <tr>
                            <td>{ JSON.stringify(product.title) }</td>
                            <td>{ JSON.stringify(product.id) }</td>
                            <td>{ JSON.stringify(product.quantity) }</td>
                            <td>{ JSON.stringify(product.price) }</td>
                            <td>{ JSON.stringify(product.total_price) }</td>
                        </tr>
                    )
                } */}
                <tr>
                    <td>Hapciu – scade febra, R6, loţiune (pentru frecţii)</td>
                    <td>56</td>
                    <td>3</td>
                    <td>40</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>Propolis tinctura fara alcool cu picurator</td>
                    <td>46</td>
                    <td>4</td>
                    <td>70</td>
                    <td>280</td>
                </tr>
                <tr>
                    <td>Vivomixx, probiotic 450 miliarde bacterii, 10 plicuri</td>
                    <td>87</td>
                    <td>4</td>
                    <td>513</td>
                    <td>2052</td>
                </tr>

            </table>
            <div style={{
                    backgroundColor: '#dddddd',
                    height: '7px',
                    width: '100%',
                }}
            />
            <table className='order-confirmation-table-2'>
                {/* <tr>
                   <td>Pret produse</td>
                   <td>{ props.productsPrice }</td>
                </tr>
                <tr>
                   <td>Pret livrare</td>
                   <td>{ props.deliveryPrice }</td>
                </tr>
                <tr style={{ backgroundColor: '#dddddd' }}>
                   <td style={{fontWeight: 'bold'}}>Pret total</td>
                   <td>{ props.totalPrice }</td>
                </tr> */}
                <tr>
                   <td>Pret produse</td>
                   <td>2452</td>
                </tr>
                <tr>
                   <td>Pret livrare</td>
                   <td>100</td>
                </tr>
                <tr style={{ backgroundColor: '#dddddd' }}>
                   <td style={{fontWeight: 'bold'}}>Pret total</td>
                   <td>2552</td>
                </tr>
            </table>
            <h3 style={{ margin: '5% 0 0 0' }}>
                Adresa livrarii
            </h3>
            <p style={{margin: '0 0 0 0', color: 'gray'}}>
                Inainte de livrare va vom contacta pentru confirmare.
            </p>
            <p style={{margin: '0 0 2% 0', color: 'gray'}}>
                In caz ca ati prezentat un email valid, veti primi o versiune email a acestei pagini. 
            </p>
            <table style={{backgroundColor: '#eeeeee'}}>
            <tr>
                    <td style={{fontWeight: 'bold'}}>Tara</td>
                    <td>Republica Moldova</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Raion/Judet</td>
                    <td>Anenii Noi</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Localitate</td>
                    <td>Valea Mare</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Adresa</td>
                    <td>or. Anenii Noi, str. I. L. Caragiale 3, ap. 6</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Nume</td>
                    <td>Atamaniuc</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Prenume</td>
                    <td>Rodion</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Telefon</td>
                    <td>+373 69816054</td>
                </tr>  
                {/* <tr>
                    <td style={{fontWeight: 'bold'}}>Tara</td>
                    <td>{ props.country }</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Raion/Judet</td>
                    <td>{ props.region }</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Localitate</td>
                    <td>{ props.city }</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Adresa</td>
                    <td>{ props.address }</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Nume</td>
                    <td>{ props.lastName }</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Prenume</td>
                    <td>{ props.firstName }</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Telefon</td>
                    <td>{ props.telephone }</td>
                </tr>                        */}
            </table>
            <p style={{margin: '5% 0 0 0', color: 'gray'}}>Va multumit ca ati ales site-l nostru!</p>
            <p style={{color: 'gray'}}>
                Echipa: <a style={{color: 'blue', textDecoration: 'underline'}} href='https://plafar.org'>PLAFAR.ORG</a>, adresa email: <a href='#' style={{color: 'blue'}}>plafarorg@gmail.com</a>
            </p>
        </div>
    )
}