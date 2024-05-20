import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import RemedyDetail from './remedy_detail';
import { FiChevronsRight } from 'react-icons/fi';

import { apiUrl } from './utils';

function SideList(props) {
    const[list, setList] = useState([]);

    useEffect(() => {
        const url = apiUrl() + `/nut_app/${props.list}/`;

        const fetchData = async() => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                setList(json);
            } catch(error) {
                console.log('error', error);
            }
        };

        fetchData();
    }, [])

    return(
        <React.Fragment>
            <h4 style={{color: '#94b237'}}>
                {props.header}
            </h4>
            <ul>
                {
                    list.map(element => 
                        <li style={{listStyleType: 'none'}}>
                            <FiChevronsRight/> 
                            {
                                props.namespace === 'ARTICOL'
                                ? <a href={
                                    `/breadcrumb/${props.namespace}/${element.category.title}/${element.id}`
                                    }>
                                         {element.title}
                                    </a>
                                : <a href={
                                    `/breadcrumb/${props.namespace}/${element.title}/`
                                    }>
                                         {element.title}
                                    </a>
                            }
                            
                               
                        </li>
                    )
                }
            </ul>
            {
                props.list === 'articlelasts'
                ? <Button 
                    variant='success' 
                    className='btn-article-detail'
                    style={{marginBottom: '1rem'}}
                    href={'/breadcrumb/ARTICOLE/TOATE%20ARTICOLELE/'}
                    >
                        Mai mult...
                    </Button>
                : []
            }
            <div className='article-detail-delimiter'/>
                
        </React.Fragment>
    )
}

export default SideList
