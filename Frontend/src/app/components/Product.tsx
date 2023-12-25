import ProductNavButton from "./ProductNavButton";

interface ProductProps {
  _id: string;
  name: string;
  price: number;
  description: string;
}

export default function Product({
  _id,
  name,
  price,
  description,
}: ProductProps) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{description}</p>
      <ProductNavButton _id={_id} />
    </div>
  );
}
