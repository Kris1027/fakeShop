import { ProductProps } from "../products/page";

export default function Product({ name, description }: ProductProps) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}
