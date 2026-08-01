import { useEffect, useState } from 'react';
import axios from 'axios'
import '../css-pages/Products.css'
import { Link, useParams } from 'react-router';

const Products = () => {

    const [products, setProducts] = useState({ state: `idle` })

    useEffect(() => {

        setProducts({ ...products, state: `loading` }),

            axios.get(`https://fakestoreapi.com/products`)
                .then(res => (setProducts({ ...products, state: `success`, result: res.data })))
                .catch(err => setProducts({ ...products, state: `error` }))

    }, [])

    let content

    switch (products.state) {

        case `idle`: content = <></>;
            break;

        case `loading`: content = <>loading...</>;
            break;

        case `success`: content = (
        
        <ul>

            {products.result.map(el => (

                <li key={el.id}>

                    <h4>{el.title}</h4>
                    <span className="price">{el.price} €</span>
                    <Link to={String(el.id)}>Vai alla pagina del prodotto</Link>

                </li>

            ))}

        </ul>

        );
            break;

        case `error`: content = <>C'è stato un errore</>;
            break;

    }

    return (
        <>

            <h2>Prodotti</h2>

            {content}

        </>
    );
};

export default Products