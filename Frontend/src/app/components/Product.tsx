import { ProductProps } from "../products/page";
import Button from "../ui/Button";
import { GiShoppingCart } from "react-icons/gi";

export default function Product({ name, price, image }: ProductProps) {
  return (
    <div className="flex w-[300px] flex-col overflow-hidden rounded-xl bg-light text-dark dark:bg-dark dark:text-light">
      <img className="w-full" src={image} alt="main image of the product" />
      <h1 className="p-2 text-center text-3xl">{name}</h1>
      <p className="p-2 font-bold text-success">${price}</p>
      <Button icon={<GiShoppingCart />} variant="buy" label="Add to Cart" />
    </div>
  );
}
