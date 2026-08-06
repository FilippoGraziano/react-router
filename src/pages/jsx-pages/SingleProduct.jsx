import { useEffect, useState } from 'react'
import '../css-pages/SingleProduct.css'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router';
import { Error, ProductNotFound } from '../../components/jsx-components/Error';

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

                {product.result.title !== undefined ? <div id='single-product'>

                    <div>
                        <Link id='products-return' to="/products" >Torna ai Prodotti</Link>
                        <h2>{product.result.title}</h2>
                        <span className="category">{product.result.category}</span>
                        <div className="flex-container">
                            <img src={product.result.image} alt="product-image" />
                            <p className="description">{product.result.description}</p>
                        </div>
                        <span className="price">{priceFormatter.format(product.result.price)}</span>
                        <div id="button-container">
                            <Link id='prev-prod' to={`/products/${String(Number(id) - 1)}`}>Prodotto precedente</Link>
                            <Link id='next-prod' to={`/products/${String(Number(id) + 1)}`}>Prodotto successivo</Link>
                        </div>
                    </div>

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