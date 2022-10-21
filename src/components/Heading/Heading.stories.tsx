import {Meta, StoryObj} from '@storybook/react';
import {Heading, IHeadingProps} from "./Heading";

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio',
            }
        }
    }
} as Meta<IHeadingProps>;

export const Default: StoryObj<IHeadingProps> = {};

export const Small: StoryObj<IHeadingProps> = {
    args: {
        size: 'sm',
    },
};

export const Large: StoryObj<IHeadingProps> = {
    args: {
        size: 'lg',
    }
};

export const CustomComponent: StoryObj<ITextProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with H1</h1>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
};