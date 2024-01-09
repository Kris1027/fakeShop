import Product from "./Product";
import ProductsApi from "../lib/ProductsApi";

async function getProducts() {
  const products = await ProductsApi();

  return products.map((prod) => <Product {...prod} />);
}

export default function ProductsPage() {
  const products = getProducts();

  return (
    <main className="flex flex-wrap justify-center gap-2 p-2">{products}</main>
  );
}
