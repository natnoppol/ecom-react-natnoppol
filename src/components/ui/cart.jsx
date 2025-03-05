import * as React from "react"
import { cn } from "../../lib/utils";


const CartContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8", className)}
    {...props} />
))
CartContainer.displayName = "CartContainer"

const CartLeftContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl", className)}
    {...props} />
))
CartLeftContainer.displayName = "CartLeftContainer"

const CartRightContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full ", className)}
    {...props} />
))
CartRightContainer.displayName = "CartRightContainer"




export { CartContainer, CartLeftContainer, CartRightContainer, }
