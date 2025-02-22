import * as React from "react"
import { cn } from "../../lib/utils";



const CheckoutContainer = React.forwardRef(({ className, ...props }, ref) => (
    <div
    ref={ref}
    className={cn("font-[sans-serif] lg:flex lg:items-center lg:justify-center lg:h-screen max-lg:py-4", className)}
    {...props} />
))
CheckoutContainer.displayName = "CheckoutContainer"

const CheckoutBackground = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-primary-100 p-8 w-full max-w-5xl max-lg:max-w-xl mx-auto rounded-md", className)}
    {...props} />
))
CheckoutBackground.displayName = "CheckoutBackground"

const CheckoutResponsive = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid lg:grid-cols-3 gap-6 max-lg:gap-8 mt-16", className)}
    {...props} />
))
CheckoutResponsive.displayName = "CheckoutResponsive"




export { CheckoutBackground, CheckoutContainer, CheckoutResponsive, }
