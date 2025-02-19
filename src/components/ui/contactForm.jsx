import * as React from "react"
import { cn } from "../../lib/utils";



const ContactContainer = React.forwardRef(({ className, ...props }, ref) => (
    <div
    ref={ref}
    className={cn("font-[sans-serif] lg:flex lg:items-center lg:justify-center lg:h-screen max-lg:py-4", className)}
    {...props} />
))
ContactContainer.displayName = "ContactContainer"

const ContactResponsive = React.forwardRef(({ className, ...props }, ref) => (
    <div
    ref={ref}
    className={cn("grid sm:grid-cols-2 items-start gap-16 p-10 mx-auto max-w-4xl font-[sans-serif] bg-white rounded-lg shadow-md  mb-4 ", className)}
    {...props} />
))
ContactResponsive.displayName = "ContactResponsive"




export { ContactContainer, ContactResponsive  }
