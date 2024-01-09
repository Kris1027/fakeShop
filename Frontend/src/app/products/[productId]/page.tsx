"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { type ProductProps, getProduct } from "../../lib/ProductsApi";
import Button from "@/app/ui/Button";

export default function DetailedProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const [product, setProduct] = useState<ProductProps | null>(null);

  const router = useRouter();

  useEffect(() => {
    getProduct(params.productId).then(setProduct);
  }, [params.productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.price} $</p>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <Button variant="buy" label="Back" onClick={() => router.back()} />
      <Button variant="buy" label="Add to cart" />
    </main>
  );
}
