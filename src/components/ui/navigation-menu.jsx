import * as React from "react";
import { cn } from "../../lib/utils";

const NavigationContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg lg:px-6 py-2.5 ", className)}
    {...props} />
))
NavigationContainer.displayName = "NavigationContainer"

const NavigationResonsive = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4", className)}
    {...props} />
))
NavigationResonsive.displayName = "NavigationResonsive"

const NavigationMenu = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center lg:order-2 gap-4", className)}
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

const NavigationMobile = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1", className)}
    {...props} />
))
NavigationMobile.displayName = "NavigationMobile"

export {
  NavigationContainer,
  NavigationResonsive,
  NavigationMenu,
  NavigationLogo,
  NavigationMobile,
};
