import { VariantProps, cva } from "class-variance-authority";
import cn from "../utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { text } from "stream/consumers";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
  className?: string;
  size?: "small" | "medium" | "big";
  variant?: "primary" | "theme" | "buy";
  label?: string;
}

export default function Button({
  children,
  className,
  variant,
  size,
  icon,
  label,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="flex justify-center">
        {icon}
        {label}
      </span>
    </button>
  );
}

const buttonVariants = cva("rounded-lg px-4 py-2 cursor-pointer", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-light",
      theme: "bg-transparent text-dark dark:text-light",
      buy: "bg-success hover:bg-successHover text-white active:scale-95",
    },
    size: {
      small: "text-sm",
      medium: "text-lg",
      big: "text-3xl",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});
