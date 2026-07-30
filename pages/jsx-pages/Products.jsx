import { useEffect, useState } from 'react';
import axios from 'axios'
import '../css-pages/Products.css'

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
                        <p className='description'>{el.description}</p>
                        <span className="price">{el.price}€</span>

                    </li>

                ))}
            </ul>

        </>
    );
};

export default Products