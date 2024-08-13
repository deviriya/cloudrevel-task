import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const DialogOverlay = ({ className, open, ...props }) => (
    <div
        className={cn(
            `fixed inset-0 backdrop-blur-sm z-50 bg-black/60 ${open ? "animate-in fade-in-0" : "hidden"}`,
            className
        )}
        {...props} />
)

const CustomModal = ({
    className,
    open,
    ...props
}) => (
    <DialogOverlay open={open}>
        <div
            className={cn(
                `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-2 border-none bg-white p-6 duration-200 rounded-lg
                ${open ? "slide-in-from-top-[48%] slide-in-from-left-1/2 zoom-in-95 fade-in-0 animate-in" : "hidden"}`,
                className
            )}
            {...props} />
    </DialogOverlay>
)

const CNMoadlHeader = ({ className, toggle, ...props }) => (
    <div className={`flex justify-between items-center mb-2 ${className}`}>
        <div {...props} />
        <p className={`absolute right-4 top-4 rounded-sm opacity-70 ring-offset-[#0b0b0b] transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-accent text-muted-foreground
        cursor-pointer	`}
            onClick={toggle}>
            <X size={20} />
        </p>
    </div>
)

const CNMoadlTitle = ({ className, toggle, ...props }) => (
    <div className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props} />
)

const CNMoadlText = ({
    className,
    ...props
}) => (
    <div
        className={`text-sm text-muted-foreground whitespace-break-spaces ${className}`}
        {...props} />
)

const CNMoadlContent = ({
    className,
    ...props
}) => (
    <div
        className={`mt-4 max-h-[80vh] overflow-auto ${className}`}
        {...props} />
)



export {
    CustomModal,
    CNMoadlContent,
    CNMoadlText,
    CNMoadlHeader,
    CNMoadlTitle
}