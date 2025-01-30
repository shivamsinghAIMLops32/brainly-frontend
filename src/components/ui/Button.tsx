import React, { ReactElement } from "react";

type Variants = "primary" | "secondary";
type Size = "sm" | "lg" | "md";

export interface ButtonProps {
  size: Size;
  variant: Variants;
  disabled?: boolean;
  text: string;
  onClick?: () => void;
  startIcon?: ReactElement; // optional
  endIcon?: ReactElement;
}

const variantStyles: Record<Variants, string> = {
  primary: "bg-[var(--color-purple-600)] text-white",
  secondary: "bg-[var(--color-purple-400)] text-[var(--color-purple-600)]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2",
  lg: "px-8 py-3",
  md: "px-6 py-3",
};



const Button = ({ text, variant, size, startIcon, endIcon, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variantStyles[variant]} ${sizeStyles[size] } flex items-center gap-2 rounded-md m-4 transition-all duration-300`}
    >
      {startIcon && <span>{startIcon}</span>}
      {text}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
