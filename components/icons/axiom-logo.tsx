import React from "react"

interface AxiomLogoProps {
  size?: number
  className?: string
}

export function AxiomLogo({ size = 24, className = "" }: AxiomLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="#A855F7"/>
      <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="#A855F7"/>
    </svg>
  )
}

export default AxiomLogo
 