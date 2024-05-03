import { Tooltip, OverlayTrigger, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import React, {useEffect, useState } from 'react';
import { CountText } from './count_text';
import { elementPath, apiUrl } from './utils';

const pathname = elementPath()

function Articles(props){
    const [articles, setArticles] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const url = apiUrl() + `/nut_app/remedies/`;

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setArticles(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [props.pageTitle("Articole - PLAFAR.ORG")])

    function contrWidth() {
        setWidth(window.innerWidth)
    }

    window.addEventListener(
        'resize', contrWidth
    )

    function titleLong() {
        if (width <= 1200 && width >= 992) {
            return 15
        } else if (width <= 992 && width >= 768) {
            return 10
        // } else if (width <= 768 && width >= 576) {
        //     return 30
        } else if (width <= 576) {
            return 20
        } else {
            return 20
        }
        
    }

    function textLong() {
        if (width <= 1200 && width >= 992) {
            return 30
        } else if (width <= 992 && width >= 768) {
            return 15
        } else {
            return 80
        }
        // return 100
    }

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center'
        },
        responceDiv: {
            width: width > 1600 ? '80%': '100%'
        }
    }

    function finalReturn(article) {
        const hrefpath = `/breadcrumb/ARTICOL/${article.category.title}/${article.id}`
        return (
            <React.Fragment>
                <Col key={article.id} style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                    <Card style={{
                                    // textAlign: 'center',
                                    border: 'none',
                                    padding: '1rem',
                                    boxShadow: '12px 12px 20px 3px rgba(0, 0, 0, .1)',
                            }}
                    >
                        <a 
                            href={hrefpath}
                            style={{
                                color: 'rgb(30, 30, 30)',
                                textDecorationLine: 'none',
                            }}
                        >
                            <Card.Img 
                                variant='top'
                                src={article.image_desc}
                            />
                            <Card.Body>
                                <OverlayTrigger
                                    key='top'
                                    placement='top'
                                    overlay={
                                        <Tooltip 
                                            id={`tooltip-top`} 
                                        >
                                            {article.title}
                                        </Tooltip>
                                    }
                                >
                                <div style={{height:'4em'}}>
                                    <Card.Title>
                                        
                                        {/* {CountText(article.title, titleLong())} */}
                                        {article.title}
                                        
                                    </Card.Title>
                                    </div>
                                </OverlayTrigger>
                                <div style={{height: '5em'}}>
                                    <Card.Text>
                                        {
                                            CountText(article.text, textLong())
                                        }
                                    </Card.Text>
                                </div>
                                
                                <Button 
                                    variant='success' 
                                    className='myBtn'
                                    // href={`/remediu%20detaliat/${article.id}`}
                                >
                                    Accesati...
                                </Button>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
            </React.Fragment>
        )
    }

    function articleReturn(article) {
        return(
            <React.Fragment>
                {
                    window.location.pathname === '/breadcrumb/ARTICOLE/TOATE%20ARTICOLELE/'
                    ?   finalReturn(article)
                    :   article.category.title === pathname.category
                    ?   finalReturn(article)
                    :   []
                }
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div style={styles.container}>
                <div style={styles.responceDiv}>
                    <Row xs={1} md={4}>
                        {
                            articles.map(article =>
                                articleReturn(article)
                            )
                        }
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Articles