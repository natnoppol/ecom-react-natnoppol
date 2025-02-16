import * as React from "react"
import { cn } from "../../lib/utils";


const CheckoutBackground = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-gray-100 h-screen py-8", className)}
    {...props} />
))
CheckoutBackground.displayName = "CheckoutBackground"

const CheckoutContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("container mx-auto px-4", className)}
    {...props} />
))
CheckoutContainer.displayName = "CheckoutContainer"

const CheckoutResponsive = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col md:flex-row gap-4", className)}
    {...props} />
))
CheckoutResponsive.displayName = "CheckoutResponsive"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-between items-center mt-2", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl", className)} {...props} />
))
CardContent.displayName = "CardContent"


export { CheckoutBackground, CheckoutContainer, CheckoutResponsive, CardDescription, CardContent }
