"use client";
import { useEffect, useState } from "react";
import Product from "../components/Product";

export interface ProductProps {
  _id?: string;
  name: string;
  description: string;
}

export default function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:3003/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {products.map((prod) => (
        <Product
          key={prod._id}
          name={prod.name}
          description={prod.description}
        />
      ))}
    </div>
  );
}
