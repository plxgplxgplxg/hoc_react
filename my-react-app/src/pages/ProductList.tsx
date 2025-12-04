import { useEffect, useState } from "react"
import type { Product } from "../types/Product";
import { useNavigate } from "react-router-dom";
import { productApi } from "../api/productApi";


const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  async function load() {
    const res = await productApi.getAll();
    setProducts(res.data.products);
  }

  async function handleDelete(id: number) {
    await productApi.delete(id);
    setProducts(products.filter((p) => p.id !== id));
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <button onClick={() => navigate("/products/create")}>
        + Create Product
      </button>

      {products.map((p) => (
        <div key={p.id} style={{marginBottom: 12}}>
          <p> {p.title} - ${p.price} </p>

          <button onClick={() => navigate(`/products/${p.id}`)}>
            View
          </button>

          <button onClick={() => navigate(`/products/${p.id}/edit`)}>
            Edit
          </button>

          <button onClick={() => handleDelete(p.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList