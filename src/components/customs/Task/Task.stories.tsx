import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Task from '.'

export default {
    title: 'UI/Tasks/Task',
    component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'test task',
        state: 'TASK_INBOX'
    } as Task
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED'
    } as Task
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED'
    } as Task
};