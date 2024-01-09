import { type ProductProps } from "./ProductsApi";
import Button from "../ui/Button";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";

export default function Product({ name, price, image, _id }: ProductProps) {
  return (
    <li
      key={_id}
      className="flex w-[300px] flex-col overflow-hidden rounded-xl bg-light text-dark dark:bg-dark dark:text-light"
    >
      <Link href={`/products/${_id}`}>
        <img className="w-full" src={image} alt="main image of the product" />
        <h1 className="p-2 text-center text-3xl">{name}</h1>
        <p className="p-2 font-bold text-success">${price}</p>
      </Link>
      <Button
        icon={<GiShoppingCart />}
        variant="buy"
        size="big"
        label="Add to cart"
      />
    </li>
  );
}
