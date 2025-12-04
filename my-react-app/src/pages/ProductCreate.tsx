import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { productApi } from '../api/productApi';

const ProductCreate = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState<number>(0);
    const navigate = useNavigate();

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        await productApi.create({
            id: 0, title, price,
            name: ''
        });
        navigate("/products");


    }

  return (
    <div>
        <h1>Create Product</h1>

        <form onSubmit={handleSubmit}>
            <input placeholder='Name'
            value={title}
            onChange={(e) => setTitle(e.target.value)} />

            <input placeholder='Price'
            type='number'
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))} />
        </form>
    </div>
  )
}

export default ProductCreate