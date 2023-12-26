import { VariantProps, cva } from "class-variance-authority";
import cn from "../utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "xl";
  variant?: "primary" | "theme" | "buy";
  label: string;
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
      <span className="flex items-center justify-center gap-1">
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
