import { VariantProps, cva } from "class-variance-authority";
import cn from "../utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("rounded-lg px-4 py-2 cursor-pointer", {
  variants: {
    variant: {
      primary: "bg-amber-700 text-amber-100",
      secondary: "bg-blue-700 text-blue-100",
      danger: "bg-red-700 text-red-100",
      theme: "bg-transparent text-dark dark:text-light",
    },
    size: {
      sm: "text-sm",
      md: "text-md",
      xl: "text-2xl",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
