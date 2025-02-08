import * as React from "react"
import { cn } from "../../lib/utils";

const FooterContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-primary-50 dark:bg-gray-800", className)}
    {...props} />
))
FooterContainer.displayName = "FooterContainer"

const FooterResonsive = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8", className)}
    {...props} />
))
FooterResonsive.displayName = "FooterResonsive"

const FooterMenu = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", className)}
    {...props} />
))
FooterMenu.displayName = "FooterMenu"

const NavigationLogo = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center space-x-4", className)}
    {...props} />
))
NavigationLogo.displayName = "NavigationLogo"

export {
    FooterContainer,
    FooterResonsive,
    FooterMenu,
};
