import React from 'react'
interface PlusIconProps {
  size: "sm"|"lg"|"md";
}
const sizeVariants:Record<PlusIconProps["size"],string> = {
  sm: "size-2",
  md: "size-4",
  lg: "size-6",
}

const PlusIcon = ({size}:PlusIconProps) => {
  return (
    
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={sizeVariants[size]}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
  )
}

export default PlusIcon



