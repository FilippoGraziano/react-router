import { useEffect, useState } from 'react';
import axios from 'axios'
import '../css-pages/Products.css'
import { Link, useParams } from 'react-router';

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products`)
            .then(res => setProducts(res.data))

    }, [])

    return (
        <>

            <h2>Prodotti</h2>

            <ul>
                {products.map(el => (

                    <li key={el.id}>

                        <h4>{el.title}</h4>
                        <span className="price">{el.price} €</span>
                        <Link to={String(el.id)}>Vai alla pagina del prodotto</Link>

                    </li>

                ))}
            </ul>

        </>
    );
};

export default Products