import cn from "@/util/cn";
import Link from "next/link";
import { Omit } from "utility-types";

type BaseProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

type InputProps = BaseProps & {
    variant?: Variant;
    href?: string;
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
    "md": "h-11",
    "lg": "text-lg h-12 px-8",
    "icon": "h-10 w-10 p-2"
}

type Size = keyof typeof sizeClass;

type Variant = keyof typeof baseVariantClass;

export const Input = (props: InputProps) => {
    const { variant = 'solid', size = 'md', href, children, className, ...rest }: InputProps = props;
    const Component = baseVariantClass[variant].type as keyof JSX.IntrinsicElements | React.ComponentType<any>;
    const variantClass = baseVariantClass[variant].className;
    const sizeVariantClass = sizeClass[size];
    
    const classNames = cn(
        baseClass,
        sizeVariantClass,
        variantClass,
        className,
    );

    if (href) return (
        <Link
        href={href}
        className={classNames}
        >
            {children}
        </Link>
    )

    return (
        <Component className={classNames} {...rest}>
            {children}
        </Component>
    )
};

export default Input;