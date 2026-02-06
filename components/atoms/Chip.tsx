import { ChipProps } from '@/lib/types'
import React from 'react'

const Chip: React.FC<ChipProps> = ({
  leftIcon,
  rightIcon,
  text,
  textColor,
  backgroundColor
}) => {

    const baseClasses = `inline-flex items-center gap-2 px-3 py-1 text-xs md:text-sm lg:text-base ${textColor} ${backgroundColor} rounded-full`
  return (

    <div className={baseClasses}>
      {leftIcon && <span>{leftIcon}</span>}
      {text && <span>{text}</span>}
      {rightIcon && <span>{rightIcon}</span>}
    </div>
  )
}

export default Chip