import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './index'

export default {
    title: 'UI/Buttons/Button',
    component: Button,
    argTypes: {
        primary: { control: 'boolean' },
        dark: { control: 'boolean' }
    },
    parameters: {
        backgrounds: {
            values: [
                { name: 'light', value: '#fff' },
                { name: 'dark', value: '#0e0815' }
            ]
        }
    }

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Button'
}

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    children: 'Button',
    onClick: (event) => {
        console.log("Button clicked", event);
    }
}

// export const Dark = Template.bind({});
// Dark.storyName = 'Dark Mode';
// Dark.args = {
//     children: 'Button',
//     dark: true
// }

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'Button'
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    children: 'Button'
}

export const InnerNode: ComponentStory<typeof Button> = (args) => (
    <Button {...args} >
        <span>&gt;</span>&nbsp;
        <span>{args.children}</span>
    </Button>
)
InnerNode.storyName = 'Inner Node';
InnerNode.args = {
    children: 'Button'
}