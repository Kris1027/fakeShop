export interface ProductProps {
  _id?: string;
  name?: string;
  price?: number;
  description?: string;
  image?: string;
}

export default async function ProductsApi() {
  const res = await fetch("http://localhost:3003/products");
  const products: ProductProps[] = await res.json();

  return products;
}

export async function getProduct(productId: string) {
  const res = await fetch(`http://localhost:3003/products/${productId}`);
  const product = await res.json();

  return product;
}
