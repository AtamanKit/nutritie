export default function OrderConfirmation(props) {
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
                    <th>Cant.-te</th>
                    <th>Pret, unit.</th>
                    <th>Pret, total</th>
                </tr>
                {
                    props.products.map(product => 
                        <tr>
                            <td>{ JSON.stringify(product.title) }</td>
                            <td>{ JSON.stringify(product.id) }</td>
                            <td>{ JSON.stringify(product.quantity) }</td>
                            <td>{ JSON.stringify(product.price) }</td>
                            <td>{ JSON.stringify(product.total_price) }</td>
                        </tr>
                    )
                }
            </table>
            <div style={{
                    backgroundColor: '#dddddd',
                    height: '7px',
                    width: '100%',
                }}
            />
            <table className='order-confirmation-table-2'>
                <tr>
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
                </tr>                       
            </table>
            <p style={{margin: '5% 0 0 0', color: 'gray'}}>Va multumit ca ati ales site-l nostru!</p>
            <p style={{color: 'gray'}}>
                Echipa: <a style={{color: 'blue', textDecoration: 'underline'}} href='https://plafar.org'>PLAFAR.ORG</a>, adresa email: <a href='#' style={{color: 'blue'}}>plafarorg@gmail.com</a>
            </p>
        </div>
    )
}