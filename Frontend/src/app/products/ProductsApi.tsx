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
