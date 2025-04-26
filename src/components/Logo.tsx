
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className, size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={cn(
      "dynamic-logo rounded-full flex items-center justify-center text-white font-playfair font-bold",
      sizeClasses[size],
      className
    )}>
      <span>HNB</span>
    </div>
  );
};

export default Logo;
