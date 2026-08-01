import { useEffect, useState } from 'react';
import axios from 'axios'
import '../css-pages/Products.css'
import { Link, useParams } from 'react-router';
import { Error } from '../../src/components/jsx-components/Error';

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

            <>

                <h2>Prodotti</h2>

                <ul>

                    {products.result.map(el => (

                        <li key={el.id}>

                            <h4>{el.title}</h4>
                            <img src={el.image} alt="product-image" />
                            <span className="price">{el.price} €</span>
                            <Link to={String(el.id)}>Vai alla pagina del prodotto</Link>

                        </li>

                    ))}

                </ul>

            </>

        );
            break;

        case `error`: content = <Error />;
            break;

    }

    return (

        <>

            {content}

        </>

    );
};

export default Products