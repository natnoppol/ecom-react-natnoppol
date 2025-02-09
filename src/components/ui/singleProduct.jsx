import * as React from "react";
import { cn } from "../../lib/utils";

const SingleProductContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("container mx-auto px-4 py-8", className)}
    {...props} />
))
SingleProductContainer.displayName = "SingleProductContainer"

const SingleProductResponsive = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid md:grid-cols-2 gap-8", className)}
    {...props} />
))
SingleProductResponsive.displayName = "SingleProductResponsive"

export {
    SingleProductContainer,
    SingleProductResponsive,
  };