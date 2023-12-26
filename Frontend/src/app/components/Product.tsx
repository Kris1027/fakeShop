import { ProductProps } from "../products/page";

export default function Product({ name, description, price }: ProductProps) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price} zł</p>
      <p>{description}</p>
    </div>
  );
}
