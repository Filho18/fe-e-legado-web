
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}) => {
  const variantClasses = {
    primary: "bg-hugo-green hover:bg-hugo-darkGreen text-white border border-hugo-green",
    secondary: "bg-transparent border border-hugo-green text-hugo-green hover:bg-hugo-green hover:text-white",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-hugo-darkGreen",
  };

  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-5 text-base",
    lg: "py-3 px-7 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "font-medium transition-colors duration-200 ease-in-out rounded-md",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
