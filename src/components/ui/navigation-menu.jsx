import * as React from "react";
import { cn } from "../../lib/utils";

const NavigationContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex justify-between bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg lg:px-6 py-2.5 z-50",
      className
    )}
    {...props}
  />
));
NavigationContainer.displayName = "NavigationContainer";

const NavigationResponsive = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
));
NavigationResponsive.displayName = "NavigationResponsive";

const NavigationMenu = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center lg:order-2 gap-4", className)} {...props} />
));
NavigationMenu.displayName = "NavigationMenu";

const NavigationLogo = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-4", className)} {...props} />
));
NavigationLogo.displayName = "NavigationLogo";

const NavigationMobile = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex justify-between items-center w-full lg:hidden",
      className
    )}
    {...props}
  />
));
NavigationMobile.displayName = "NavigationMobile";

export {
  NavigationContainer,
  NavigationResponsive,
  NavigationMenu,
  NavigationLogo,
  NavigationMobile,
};
