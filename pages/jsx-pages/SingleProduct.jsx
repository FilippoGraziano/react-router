import { useEffect, useState } from 'react'
import '../css-pages/SingleProduct.css'
import axios from 'axios';
import { useParams } from 'react-router';

const SingleProduct = () => {

    const [product, setProduct] = useState({ state: `idle` })

    const { id } = useParams()

    useEffect(() => {

        setProduct({ ...product, state: `loading` })

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct({ ...product, state: `success`, result: res.data }))
            .catch(err => setProduct({ ...product, state: `error` }))

    }, [id])

    let content

    switch (product.state) {

        case `idle`: content = <></>;
            break;

        case `loading`: content = <>loading...</>;
            break;

        case `success`: content = (

            <>
                <h2>{product.result.title}</h2>
                <span className="category">{product.result.category}</span>

                <img src={product.result.image} alt="product-image" />

                <p className="description">{product.result.description}</p>

                <span className="price">{product.result.price} €</span>
            </>

        );
            break;

        case `error`: content = <>C'è stato un errore</>;
            break;

    }


    return (

        <div id='silgle-product'>

            {content}

        </div>

    );
};

export default SingleProduct