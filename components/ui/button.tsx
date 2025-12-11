"use client"

import type { ButtonHTMLAttributes } from "react"
import { forwardRef } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "lg" | "sm"
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none"

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-coral text-white hover:bg-coral/90 focus-visible:ring-coral/40",
  outline:
    "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5 focus-visible:ring-foreground/30",
  ghost: "bg-transparent text-foreground hover:bg-foreground/10 focus-visible:ring-foreground/20",
}

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  sm: "px-4 py-2 text-sm",
}

const cn = (...classes: Array<string | undefined | false>) => classes.filter(Boolean).join(" ")

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"
