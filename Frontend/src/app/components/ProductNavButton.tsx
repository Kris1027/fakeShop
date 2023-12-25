"use client";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";

interface ProductNavButtonProps {
  _id: string;
}

export default function ProductNavButton({ _id }: ProductNavButtonProps) {
  const router = useRouter();

  function handleClick() {
    router.push(`/products/${_id}`);
  }

  return <Button onClick={handleClick}>show product</Button>;
}
