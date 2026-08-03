import { useEffect, useState } from 'react';
import axios from 'axios'
import '../css-pages/Products.css'
import { Link, useParams } from 'react-router';
import { Error } from '../../components/jsx-components/Error';

const Products = () => {

    const [products, setProducts] = useState({ state: `idle` })

    useEffect(() => {

        setProducts({ ...products, state: `loading` }),

            axios.get(`https://fakestoreapi.com/products`)
                .then(res => (setProducts({ ...products, state: `success`, result: res.data })))
                .catch(err => setProducts({ ...products, state: `error` }))

    }, [])

    const priceFormatter = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' });

    let content

    switch (products.state) {

        case `idle`: content = <></>;
            break;

        case `loading`: content = <>loading...</>;
            break;

        case `success`: content = (

            <div id='products-list'>

                <h1>Prodotti</h1>

                <ul>

                    {products.result.map(el => (

                        <li key={el.id}>

                            <Link to={String(el.id)}>

                                <img src={el.image} alt="product-image" />

                                <h4>{el.title}</h4>

                                <span className="price">{priceFormatter.format(el.price)}</span>

                            </Link>

                        </li>

                    ))}

                </ul>

            </div>

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