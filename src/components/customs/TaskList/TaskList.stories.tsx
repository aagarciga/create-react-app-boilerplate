import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TaskList from '.'
import Task from '../Task';

export default {
    title: 'UI/Tasks/TaskList',
    component: TaskList,
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>]
} as ComponentMeta<typeof TaskList>;

const mockTasks = [
    { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
    { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
    { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
    { id: '5', title: 'Task 5', state: 'TASK_INBOX' },
    { id: '6', title: 'Task 6', state: 'TASK_INBOX' },
] as Array<Task>;

const Template: ComponentStory<typeof TaskList> = (args) => <TaskList {...args} />;


export const Default = Template.bind({});
Default.args = {
    tasks: mockTasks
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
        ...mockTasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    isLoading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    isLoading: false,
};