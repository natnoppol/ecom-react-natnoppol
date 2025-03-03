import * as React from "react"
import { cn } from "../../lib/utils";



const ContactContainer = React.forwardRef(({ className, ...props }, ref) => (
    <div
    ref={ref}
    className={cn("font-[sans-serif] lg:flex lg:items-center lg:justify-center justify-center items-center", className)}
    {...props} />
))
ContactContainer.displayName = "ContactContainer"

const ContactResponsive = React.forwardRef(({ className, ...props }, ref) => (
    <div
    ref={ref}
    className={cn("flex flex-wrap lg:flex-nowrap items-start justify-between gap-16 p-10 mx-auto max-w-4xl font-[sans-serif] rounded-lg shadow-md mb-4 dark:bg-white", className)}
    {...props} />
))
ContactResponsive.displayName = "ContactResponsive"




export { ContactContainer, ContactResponsive  }
