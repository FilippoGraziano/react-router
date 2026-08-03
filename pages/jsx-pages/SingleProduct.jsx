import { useEffect, useState } from 'react'
import '../css-pages/SingleProduct.css'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router';
import { Error, ProductNotFound } from '../../src/components/jsx-components/Error';

const SingleProduct = () => {

    const [product, setProduct] = useState({ state: `idle` })

    const { id } = useParams()

    useEffect(() => {

        setProduct({ ...product, state: `loading` })

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct({ ...product, state: `success`, result: res.data }))
            .catch(err => setProduct({ ...product, state: `error` }))

    }, [id])

    const priceFormatter = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' });

    let content

    switch (product.state) {

        case `idle`: content = <></>;
            break;

        case `loading`: content = <>loading...</>;
            break;

        case `success`: content = (

            <>
                {product.result.title !== undefined ? <div className='single-product'>

                    <Link to="/products" >Torna ai Prodotti</Link>

                    <h2>{product.result.title}</h2>
                    <span className="category">{product.result.category}</span>

                    <img src={product.result.image} alt="product-image" />

                    <p className="description">{product.result.description}</p>

                    <span className="price">{priceFormatter.format(product.result.price)}</span>

                    <Link to={`/products/${String(Number(id) - 1)}`}>Prodotto precedente</Link>

                    <Link to={`/products/${String(Number(id) + 1)}`}>Prodotto successivo</Link>

                </div> : <ProductNotFound productId={id} />}
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

export default SingleProduct