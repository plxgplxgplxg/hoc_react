import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { productApi } from "../api/productApi";
import type { Product } from "../types/Product";


const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  async function load() {
    if (!id) return;
    const res = await productApi.getOne(Number(id));
    setProduct(res.data);
  }

  useEffect(() => {
    load();
  }, [id]);

  if (!product) return <p>0 co j</p>
  
  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {product.title} </p>
      <p>Price: {product.price} </p>
      <p>Description: {product.description} </p>

      <button onClick={() => navigate("/products")}>Back</button>
    </div>
  )
}

export default ProductDetail