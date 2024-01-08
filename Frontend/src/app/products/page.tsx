import Product from "./Product";
import ProductsApi from "./ProductsApi";

async function getProducts() {
  const products = await ProductsApi();

  return products.map((prod) => (
    <Product
      key={prod._id}
      name={prod.name}
      price={prod.price}
      image={prod.image}
    />
  ));
}

export default function ProductsPage() {
  const products = getProducts();

  return (
    <main className="flex flex-wrap justify-center gap-2 p-2">{products}</main>
  );
}
