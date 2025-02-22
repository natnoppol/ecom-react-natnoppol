import * as React from "react"
import { cn } from "../../lib/utils";


const CartBackground = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-screen py-8 ", className)}
    {...props} />
))
CartBackground.displayName = "CartBackground"

const CartContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("container mx-auto px-4", className)}
    {...props} />
))
CartContainer.displayName = "CartContainer"

const CartResponsive = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col md:flex-row gap-4", className)}
    {...props} />
))
CartResponsive.displayName = "CartResponsive"




export { CartBackground, CartContainer, CartResponsive, }
