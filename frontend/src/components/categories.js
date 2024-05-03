import { CardGroup, Card, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// import SectionTitle from './section_title';

function Categories(props){
    const [categories, setCategories] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    const checkWidth = () => {
        setWidth(window.innerWidth)
    }

    window.addEventListener(
        'resize', checkWidth
    )

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center'
        },
        responsiveDiv: {
            width: width > 1600 ? '80%' : '100%',
        }
    }

    useEffect(() => {
        const url = props.url

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setCategories(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])

    
    return (
        <React.Fragment>
            {/* <SectionTitle 
                _ref={props.catRef}
                _first_title={props.first_title}
                _second_title={props.second_title}
                _text={props.text}
            /> */}
            {/* <Card className='prod-cat' ref={props.catRef}>
                <Card.Body>
                    <Card.Title>
                        <h2 className='produsele'>{props.first_title} </h2>
                        <h2 className='categorii'>{props.second_title}</h2>
                        <div className='card-line'/>
                    </Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card> */}
            <div style={styles.container}>
                <div style={styles.responsiveDiv}>
                    <CardGroup>
                        {
                            categories.map((category) => {
                                const hrefpath = `/breadcrumb/${props.type}/${category.title}/`
                                return (
                                    <React.Fragment>
                                        <Card key={category.id} className='cardbody'>
                                        {/* <div className='cat-img'> */}
                                            <a href={hrefpath}>
                                                <Card.Img 
                                                        variant='top' 
                                                        src={category.image_desc}
                                                        className='cat-img'
                                                />
                                            </a>
                                            <Card.Body>
                                                <Card.Title style={{paddingBottom: '1em'}}>{category.title}</Card.Title>
                                                {/* <Card.Text>{category.description}</Card.Text> */}
                                                <Button href={hrefpath} variant='success' className='myBtn'>
                                                    Accesati...
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                </React.Fragment>
                                )
                            })
                        }
                    </CardGroup>
                 </div>
            </div>
        </React.Fragment>
    )
}

export default Categories