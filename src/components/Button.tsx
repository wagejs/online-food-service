import { ReactNode } from "react";

export type ButtonSize = "md" | "lg"

export type ButtonVariant = "primary" | "inverse-primary"

interface IButton {
  className?: string
  onClick: () => void
  children: ReactNode,
  size: ButtonSize,
  variant: ButtonVariant
}

const buttonSizeMapClassStyle = {
  "md": "py-4 px-8 text-base",
  "lg": "py-6 px-12 text-2xl",
}

const buttonVariantMapClassStyle = {
  "primary": "text-brand-dark bg-brand-primary",
  "inverse-primary": "text-brand-primary bg-brand-dark"
}

function Button({ className, onClick, children, size, variant }: IButton) {

  const buttonClasses = [
    'font-bold rounded-full',
    buttonVariantMapClassStyle[variant],
    buttonSizeMapClassStyle[size],
    className,
  ].join(" ")

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
};

export default Button;
