'use client';

import React, { forwardRef } from "react";

import cn from "@/util/cn";
import Link from "next/link";
import { Omit } from "utility-types";

type BaseProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

type InputProps = BaseProps & {
    variant?: Variant;
    size?: Size;
};

const baseClass = "placeholder:text-gray-700 px-6 flex gap-2 items-center justify-center font-mono text-sm text-black font-normal py-2 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";

const baseVariantClass = {
    "solid": {
        className: "bg-gray-200 focus:bg-gray-200/50",
        type: "input"
    },
    "outline": {
        className: "bg-transparent focus:bg-white border border-gray-500",
        type: "input"
    },
}

const sizeClass = {
    "xs": "h-8",
    "sm": "h-10",
    "md": "h-12",
    "lg": "text-md h-12 px-8",
    "icon": "h-10 w-10 p-2"
}

type Size = keyof typeof sizeClass;

type Variant = keyof typeof baseVariantClass;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { variant = 'solid', size = 'md', className, ...rest }: InputProps = props;
    const variantClass = baseVariantClass[variant].className;
    const sizeVariantClass = sizeClass[size];
    
    const classNames = cn(
        baseClass,
        sizeVariantClass,
        variantClass,
        className,
    );

    return (
        <input className={classNames} ref={ref} {...rest}/>
    )
});

Input.displayName = 'Input';

type FormInputProps = InputProps & {
    register?: any;
    name?: string;
};

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
    const { register, ...rest }: FormInputProps = props;
    
    return (
        <Input {...rest} ref={register} />
    )
});

FormInput.displayName = 'FormInput';

export default Input;

export { FormInput };
