import React from 'react'

import { IconProps } from "@/lib/types";

const Icon: React.FC<IconProps> = ({
    icon,
    size,
    iconColor,
    backgroundColor
}) => {

    const iconButtonBase = `
        inline-flex items-center justify-center
        rounded-full
        transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50`;

    const sizeStyles = size ? {
        sm: "h-8 w-8 text-base",
        md: "h-10 w-10 text-lg",
        lg: "h-12 w-12 text-xl",
    } [size] : "h-8 w-8 text-base" +
        " md:h-10 md:w-10 md:text-lg" +
        " lg:h-12 lg:w-12 lg:text-xl";

    return (
        <button
            className={`${iconButtonBase} ${sizeStyles} ${iconColor} ${backgroundColor}`}
            aria-label="Icon Button">
            {icon}
        </button>
    )
}

export default Icon