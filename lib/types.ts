import { ReactNode } from "react";

export interface ButtonProps {
  textColor: string;
  className?: string;
  backgroundColor: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  text?: ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "lg" | "md" | "sm";
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  ref?: React.ForwardedRef<HTMLButtonElement>;
  isRounded?: boolean;
}

export interface ChipProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  text?: ReactNode;
  textColor?: string;
  backgroundColor?: string;
}

export interface IconProps {
  icon: React.ReactNode
  size?: "sm" | "md" | "lg"
  iconColor?: string
  backgroundColor?: string
}