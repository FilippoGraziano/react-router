import { Link } from 'react-router';
import '../css-components/Error.css'

export const Error = () => (

    <div id='error'>

        <h2>C'è stato un errore riprova più tardi</h2>

    </div>

);

export const ProductNotFound = props => (

    <div id="error-product-not-found">

        <section id='error-title'>

            <h2>Error 404</h2>
            <p>Prodotto non trovato</p>

        </section>

        <section id='error-choice'>

            <Link to={`/products/${Number(props.productId) <= 0 ?
                String(Number(props.productId)) + 1
                :
                String(Number(props.productId) - 1)}`}> Torna indietro </Link>
            
            <span>oppure</span>

            <Link to="/products">Torna alla pagina dei prodotti</Link>

        </section>

    </div>

);