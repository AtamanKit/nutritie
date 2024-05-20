import { CardGroup, Card, Button, Figure, Row, Col } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import { apiUrl } from './utils';

function Brands(props){
    const [brands, setBrands] = useState('');

    useEffect(() => {
        const url = apiUrl() + '/nut_app/brands/';

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setBrands(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])

    return (
        <React.Fragment>
            <Row xs={2} md={3} lg={4} xl={5} className="brands-container">
            {
                brands.length !== 0
                ?   brands.map(brand =>
                    <Col key={brand.id} >
                    <Card style={{border: '0'}}>
                    <a href={`/breadcrumb/PRODUSE/${brand.title}/`}>
                        <Card.Img
                            src={brand.image_desc} 
                            style={{
                                // paddingTop: '1rem',
                                // paddingLeft:'1rem',
                                // paddingRight: '1rem'
                                padding: '4rem'
                            }}
                        />
                    </a>
                    </Card>
                    </Col>
                    
                )
                : []
            }
            </Row>            
        </React.Fragment>
    )
}

export default Brands