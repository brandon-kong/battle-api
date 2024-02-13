import cn from "@/util/cn";

type BaseProps = Readonly<{
    children?: React.ReactNode;
    className?: string;
}>;

type TypographyProps = BaseProps & {
    variant?: Variant;
};

const baseVariantClass = {
    "h0": {
        className: "font-sans text-7xl font-semibold tracking-tight leading-tight",
        type: "h1"
    },
    "h1": {
        className: "font-sans text-6xl font-semibold leading-tight tracking-normal",
        type: "h1"
    },
    "h2": {
        className: "font-sans text-3xl font-bold",
        type: "h2"
    },
    "h3": {
        className: "font-sans text-2xl font-semibold tracking-tight leading-normal",
        type: "h3"
    },
    "h4": {
        className: "font-sans text-xl font-semibold tracking-tight leading-normal",
        type: "h4"
    },
    "h5": {
        className: "font-sans text-lg font-bold",
        type: "h5"
    },
    "h6": {
        className: "font-sans text-base font-bold",
        type: "h6"
    },
    "subtitle": {
        className: "font-sans text-xs font-medium tracking-widest leading-normal uppercase text-gray-400",
        type: "h6"
    },
    "p": {
        className: "font-mono text-base",
        type: "p"
    },
    "p-small": {
        className: "font-mono text-sm tracking-tight leading-snug",
        type: "p"
    },
    "p-xsmall": {
        className: "font-mono text-xs tracking-tight leading-snug",
        type: "p"
    },
    "p-large": {
        className: "font-mono text-xl tracking-tight leading-normal",
        type: "p"
    },
    "span": {
        className: "font-mono text-base",
        type: "span"
    }
}

type Variant = keyof typeof baseVariantClass;

export const Typography = (props: TypographyProps ) => {
    const { variant = 'p', children, className } = props;

    const Component = baseVariantClass[variant].type as keyof JSX.IntrinsicElements | React.ComponentType<any>;
    const variantClass = baseVariantClass[variant].className;
    
    const classNames = cn(
        variantClass,
        className,
    );

    return (
        <Component className={classNames}>
            {children}
        </Component>
    )
};

export default Typography;