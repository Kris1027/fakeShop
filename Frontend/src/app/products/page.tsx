async function getProducts() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();

  return data.data;
}

export default async function Products() {
  const products = await getProducts();
  console.log({ products });

  return <h1>Products</h1>;
}
