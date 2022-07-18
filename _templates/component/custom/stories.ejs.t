---
to: src/components/customs/<%= Name %>/<%= Name %>.stories.tsx
---
// Copyright 2022 Origin It Solutions B.V

/**
 * (Type docs)
 * 
 * @author username
 * 
 */
 import React, { Component } from 'react';
 import { ComponentStory, ComponentMeta } from '@storybook/react';
 import <%= Name %> from '.';

 export default {
    title: 'UI/<%= Name %>',
    component: <%= Name %>,
    argTypes: {

    }
 } as ComponentMeta<typeof Component>;

 const Template: ComponentStory<typeof <%= Name %>> = args => <<%= Name %> {...args} />;

 export const Default = Template.bind({});
 Default.args = {
    children: <p><%= Name %></p>
 }

export const Empty = Template.bind({});
Empty.args = {

}