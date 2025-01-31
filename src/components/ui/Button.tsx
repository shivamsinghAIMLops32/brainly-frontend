import { ReactElement } from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonTVariants = "primary" | "secondary";
export interface ButtonPropsInterface {
  title: string;
  onclick?: () => void;
  frontIcon?: ReactElement;
  backIcon?: ReactElement;
  isdisabled?: boolean;
  size: ButtonSize;
  variants: ButtonTVariants;
}

const sizeStyle: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-sm rounded-sm",
  md: " px-4 py-2 text-md rounded-md",
  lg: "px-4 py-4 text-lg rounded-lg",
};

const buttonVariantStyle: Record<ButtonTVariants, string> = {
  primary: "bg-[var(--color-purple-600)] text-white",
  secondary: "bg-[var(--color-purple-300)] text-black",
};

const Button = ({
  title,
  onclick,
  frontIcon,
  backIcon,
  size,
  variants,
  isdisabled,
}: ButtonPropsInterface) => {
  return (
    <>
      <button className={` ${sizeStyle[size]} ${buttonVariantStyle[variants]} m-2 hover:cursor-pointer duration-75 ease-in`} onClick={isdisabled ? undefined : onclick}>
        <div className="flex items-center">
        {frontIcon && <span>{frontIcon}</span>}
        <div className="px-1 py-1">

        {title}
        </div>
        {backIcon && <span>{backIcon}</span>}
        </div>
      </button>
    </>
  );
};
export default Button;
