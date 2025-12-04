import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { Product } from '../types/Product';
import { productApi } from '../api/productApi';

const ProductEdit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);

    async function load() {
        if (!id) return;
        const res = await productApi.getOne(Number(id));
        setProduct(res.data);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!product) return;

        await productApi.update(product.id, product);
        navigate("/products");
    }

    useEffect(() => {
        load();
    }, [id]);

    if (!product) return <p>no product</p>

  return (
    <div>
    <div>ProductEdit</div>

    <form onSubmit={handleSubmit}>
        <input value={product.title}
        onChange={(e) => setProduct({...product, title: e.target.value})}
        />

        <input value={product.price}
        onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
        />

        <button type="submit">Save</button>

        
    </form>
    </div>
  )
}

export default ProductEdit