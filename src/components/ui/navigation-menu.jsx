import * as React from "react";
import { cn } from "../../lib/utils";

const NavigationContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg sticky top-0 z-50", className)}
    {...props} />
))
NavigationContainer.displayName = "NavigationContainer"

const NavigationResonsive = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
    {...props} />
))
NavigationResonsive.displayName = "NavigationResonsive"

const NavigationMenu = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-between h-16 items-center", className)}
    {...props} />
))
NavigationMenu.displayName = "NavigationMenu"

const NavigationLogo = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center space-x-4", className)}
    {...props} />
))
NavigationLogo.displayName = "NavigationLogo"

export {
  NavigationContainer,
  NavigationResonsive,
  NavigationMenu,
  NavigationLogo,
};
