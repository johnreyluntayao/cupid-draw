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
        sm: "h-10 w-10 text-lg",
        md: "h-14 w-14 text-xl",
        lg: "h-16 w-16 text-2xl",
    } [size] : "h-10 w-10 text-lg" +
        " md:h-14 md:w-14 md:text-xl" +
        " lg:h-16 lg:w-16 lg:text-2xl";

    return (
        <button
            className={`${iconButtonBase} ${sizeStyles} ${iconColor} ${backgroundColor}`}
            aria-label="Icon Button">
            {icon}
        </button>
    )
}

export default Icon