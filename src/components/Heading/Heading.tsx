import {ReactNode} from "react";
import {Slot} from "@radix-ui/react-slot";
import {clsx} from "clsx";

export interface IHeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export const Heading = ({size = 'md', children, asChild}: IHeadingProps) => {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp
            className={clsx('text-gray-100 font-bold font-sans', {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',

            })}
        >
            {children}
        </Comp>
    )
}