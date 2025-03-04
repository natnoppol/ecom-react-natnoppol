import * as React from "react";
import { cn } from "../../lib/utils";

const NavigationContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col lg:flex-row md:flex-row  justify-between bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg py-2.5 z-50 lg:px-6",
      className
    )}
    {...props}
  />
));
NavigationContainer.displayName = "NavigationContainer";

const NavigationResponsive = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex px-5 order-2 sm:order-1 md:p-4", className)} {...props} />
));
NavigationResponsive.displayName = "NavigationResponsive";

const NavigationMenu = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(" lg:flex md:flex hidden  items-center  space-x-6", className)} {...props} />
));
NavigationMenu.displayName = "NavigationMenu";

const NavigationLogo = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex justify-between items-center p-4 ", className)} {...props} />
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
