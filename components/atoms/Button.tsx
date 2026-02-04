"use client";

import React from "react";
import { ButtonProps } from "@/lib/types";

const Button: React.FC<ButtonProps> = ({
  textColor,
  backgroundColor,
  leftIcon,
  rightIcon,
  text,
  onClick,
  size,
  isDisabled = false,
  type = "button",
  className,
  ref,
}) => {
  const baseClasses = `flex items-center justify-center rounded-full transition-colors duration-200 hover:brightness-90 cursor-pointer h-[60px] lg:h-[64px] ${
    isDisabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  const sizeClasses = size
    ? {
        lg: "text-[18px] gap-2 py-3 px-6 ",
        md: "text-[16px] gap-1.5 py-2.5 px-5",
        sm: "text-[14px] gap-1 py-2 px-4 ",
      }[size]
    : "text-[14px] gap-1 py-2 px-4  " +
      "md:text-[16px] md:gap-1.5 md:py-2.5 md:px-5 " +
      "lg:text-[18px] lg:gap-2 lg:py-3 lg:px-6 ";

  return (
    <button
      aria-label={"Button"}
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseClasses} ${className} ${sizeClasses} ${textColor} ${backgroundColor} ${
        isDisabled ? "pointer-events-none" : ""
      }`}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {text && <span>{text}</span>}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;