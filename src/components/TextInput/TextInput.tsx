import {clsx} from "clsx";
import {InputHTMLAttributes, ReactNode} from "react";
import {Slot} from "@radix-ui/react-slot";

export interface ITextInputRootProps {
    children: ReactNode;
}

const TextInputRoot = ({children}: ITextInputRootProps) => {
    return (
        <div className='flex items-center gap-3 py-4 px-3 rounded bg-gray-800 h-12 w-full focus-within:ring-2 ring-cyan-300'>
            {children}
        </div>

    )
}

TextInputRoot.displayName = 'TextInput.Root';

export interface ITextInputIconProps {
    children: ReactNode;
}

const TextInputIcon = ({children}: ITextInputIconProps) => {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface ITextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: ITextInputInputProps) => {
    return (
            <input
                className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
                {...props}
            />
        )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}