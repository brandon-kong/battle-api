import cn from "@/util/cn";
import Link from "next/link";

type BaseProps = Readonly<{
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    size?: Size;
}>;

type ButtonProps = BaseProps & {
    variant?: Variant;
    href?: string;
};

const baseClass = "cursor-pointer select-none flex gap-2 items-center justify-center font-mono text-sm text-white font-medium py-2 px-4 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";

const baseVariantClass = {
    "primary": {
        className: "bg-blue-500 hover:bg-blue-600",
        type: "button"
    },
    "secondary": {
        className: "bg-gray-500 hover:bg-gray-600",
        type: "button"
    },
    "outline": {
        className: "bg-transparent text-black hover:bg-white border border-gray-500",
        type: "button"
    },
    "ghost": {
        className: "bg-transparent text-black hover:bg-blue-100",
        type: "button"
    },
    "danger": {
        className: "bg-red-500 hover:bg-red-600",
        type: "button"
    },
    "link": {
        className: "px-2 bg-transparent underline underline-offset-4 text-blue-500 hover:text-blue-600",
        type: "a"
    
    }
}

const sizeClass = {
    "xs": "h-8 px-4",
    "sm": "h-10 px-6",
    "md": "h-12 px-8",
    "lg": "text-lg h-12 px-8",
    "icon": "h-10 w-10 p-2"
}

type Size = keyof typeof sizeClass;

type Variant = keyof typeof baseVariantClass;

export const Button = (props: ButtonProps) => {
    const { variant = 'primary', size = 'md', href, children, className, onClick } = props;

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
        <Component className={classNames} onClick={onClick}>
            {children}
        </Component>
    )
};

export default Button;