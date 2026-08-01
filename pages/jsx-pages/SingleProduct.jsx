import { useEffect, useState } from 'react'
import '../css-pages/SingleProduct.css'
import axios from 'axios';
import { useParams } from 'react-router';

const SingleProduct = () => {

    const [product, setProduct] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
    }, [id])

    return (

        <div id='silgle-product'>

            <h2>{product.title}</h2>
            <span className="category">{product.category}</span>

            <img src={product.image} alt="product-image" />

            <p className="description">{product.description}</p>

            <span className="price">{product.price} €</span>
        </div>

    );
};

export default SingleProduct