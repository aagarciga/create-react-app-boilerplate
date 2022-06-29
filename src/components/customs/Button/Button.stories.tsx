import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './index'

export default {
    title: 'UI/Buttons/Button',
    component: Button,
    argTypes: {
        primary: { control: 'boolean' },
        dark: { control: 'boolean' }
    }

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Regular = Template.bind({});
Regular.args = {
    children: 'Button'
}

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    children: 'Button'
}

export const Dark = Template.bind({});
Dark.args = {
    children: 'Button',
    dark: true
}

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