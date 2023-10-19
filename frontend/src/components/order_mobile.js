import { Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

export default function OrderMobile(props) {
    const [country, setCountry] = useState('Republica Moldova');

    return (
        <>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Prenume</Form.Label>
                    <Form.Control
                        required
                        placeholder='Introduceti prenume'
                        onChange={e => props.sFirstName(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                        Introduceti prenume
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Nume</Form.Label>
                    <Form.Control
                        required
                        placeholder='Introduceti nume'
                        onChange={e => props.sLastName(e.targe.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                        Introduceti nume
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Numar telefon</Form.Label>
                    <Form.Control
                        required
                        placeholder='Introduceti numar telefon'
                        onChange={e => props.sTelephone(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                        Introduceti numar de telefon
                    </Form.Control.Feedback>
                </Form.Group>    
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        placeholder='Introduceti email'
                        onChange={e => props.sEmail(e.targe.value)}
                    />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Tara</Form.Label>
                    <Form.Select
                        required
                        defaultValue='Alegeti...'
                        onChange={
                            e => {
                                props.sCountry(e.target.value);
                                setCountry(e.target.value)
                            }
                        }
                    >
                        <option value='Republica Moldova'>Republicat Moldova</option>
                        <option value='Romania'>Romania</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>
                        Introduceti tara
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Raion/Judet</Form.Label>
                    {
                        country === 'Republica Moldova'
                        ?   <Form.Select 
                                required
                                defaultValue='Alegeti...'
                                id='region'
                            >   
                                <option value='Anenii Noi'>Anenii Noi</option>
                                <option value='Basarabeasca'>Basarabeasca</option>
                                <option value='Briceni'>Briceni</option>
                                <option value='Cahul'>Cahul</option>
                                <option value='Cantemir'>Cantemir</option>
                                <option value='Calarasi'>Calarasi</option>
                                <option value='Causeni'>Causeni</option>
                                <option value='Cimislia'>Cimislia</option>
                                <option value='Criuleni'>Criuleni</option>
                                <option value='Donduseni'>Donduseni</option>
                                <option value='Drochia'>Drochia</option>
                                <option value='Dubasari'>Dubasari</option>
                                <option value='Edinet'>Edinet</option>
                                <option value='Falesti'>Falesti</option>
                                <option value='Floresti'>Floresti</option>
                                <option value='Glodeni'>Glodeni</option>
                                <option value='Hincesti'>Hincesti</option>
                                <option value='Ialoveni'>Ialoveni</option>
                                <option value='Leova'>Leova</option>
                                <option value='Nisporeni'>Nisporeni</option>
                                <option value='Ocnita'>Ocnita</option>
                                <option value='Orhei'>Orhei</option>
                                <option value='Rezina'>Rezina</option>
                                <option value='Riscani'>Riscani</option>
                                <option value='Singerei'>Singerei</option>
                                <option value='Soroca'>Soroca</option>
                                <option value='Straseni'>Straseni</option>
                                <option value='Soldanesti'>Soldanesti</option>
                                <option value='Stefan Voda'>Stefan Voda</option>
                                <option value='Taraclia'>Taraclia</option>
                                <option value='Telenesti'>Telenesti</option>
                                <option value='Ungheni'>Ungheni</option>
                            </Form.Select>
                        :   <Form.Select
                                required
                                defaultValue='Alegeti...'
                                id='region'
                            >
                                <option value='Alba'>Alba</option>
                                <option value='Arad'>Arad</option>
                                <option value='Arges'>Arges</option>
                                <option value='Bacau'>Bacau</option>
                                <option value='Bihor'>Bihor</option>
                                <option value='Bistrita-Nasaud'>Bistrita-Nasaud</option>
                                <option value='Botosani'>Botosani</option>
                                <option value='Brasov'>Brasov</option>
                                <option value='Braila'>Braila</option>
                                <option value='Bucuresti'>Bucuresti</option>
                                <option value='Buzau'>Buzau</option>
                                <option value='Caras-Severin'>Caras-Severin</option>
                                <option value='Calarasi'>Calarasi</option>
                                <option value='Cluj'>Cluj</option>
                                <option value='Constanta'>Constanta</option>
                                <option value='Covasna'>Covasna</option>
                                <option value='Dambovita'>Dambovita</option>
                                <option value='Dolj'>Dolj</option>
                                <option value='Galati'>Galati</option>
                                <option value='Giurgiu'>Giurgiu</option>
                                <option value='Gorj'>Gorj</option>
                                <option value='Harghita'>Harghita</option>
                                <option value='Hunedoara'>Hunedoara</option>
                                <option value='Ialomita'>Ialomita</option>
                                <option value='Iasi'>Iasi</option>
                                <option value='Ilfov'>Ilfov</option>
                                <option value='Maramures'>Maramures</option>
                                <option value='Mehedinti'>Mehedinti</option>
                                <option value='Mures'>Mures</option>
                                <option value='Neamt'>Neamt</option>
                                <option value='Olt'>Olt</option>
                                <option value='Prahova'>Prahova</option>
                                <option value='Satu Mare'>Satu Mare</option>
                                <option value='Salaj'>Salaj</option>
                                <option value='Sibiu'>Sibiu</option>
                                <option value='Suceava'>Suceava</option>
                                <option value='Teleorman'>Teleorman</option>
                                <option value='Timis'>Timis</option>
                                <option value='Tulcea'>Tulcea</option>
                                <option value='Vaslui'>Vaslui</option>
                                <option value='Valcea'>Valcea</option>
                                <option value='Vrancea'>Vrancea</option>
                            </Form.Select>
                    }
                    <Form.Control.Feedback type='invalid'>
                        Introduceti regiunea
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Oras (alta localitate)</Form.Label>
                    <Form.Control
                        required
                        placeholder='Oras sau alta localitate'
                        onChange={e => props.sCity(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                        Introduceti localitatea
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Adresa</Form.Label>
                    <Form.Control
                        placeholder='str., nr. bloc/nr. apartament'
                        onChange={e => props.sAddress(e.target.value)}
                    />
                </Form.Group>
            </Row>
        </>
    )
}