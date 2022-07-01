import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

import TaskList from '.'
import Task from '../Task';

import mockTasks from '../../../data/tasks.json';



// const mockTasks = [
//     { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
//     { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
//     { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
//     { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
//     { id: '5', title: 'Task 5', state: 'TASK_INBOX' },
//     { id: '6', title: 'Task 6', state: 'TASK_INBOX' },
// ] as Task[];

export const MockedState = {
    tasks: mockTasks,
    status: 'idle',
    error: null
}

const Mockstore = ({ taskboxState, children }: any) => (
    <Provider
        store={
            configureStore({
                reducer: {
                    taskbox: createSlice({
                        name: 'taskbox',
                        initialState: taskboxState,
                        reducers: {
                            updateTaskState: (state, action) => {
                                const { id, state: newTaskState } = action.payload;
                                const taskIndex = state.tasks.findIndex((task: Task) => task.id === id);
                                if (taskIndex >= 0) {
                                    state.tasks[taskIndex].state = newTaskState;
                                }
                            }
                        }
                    }).reducer
                }
            })
        }
    >
        {children}
    </Provider>
);

export default {
    title: 'UI/Tasks/TaskList',
    component: TaskList,
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
    excludeStories: /.*MockedState$/,
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => <TaskList />;

export const Default = Template.bind({});
Default.decorators = [
    (story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
];

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.decorators = [
    (story) => {
        const pinnedtasks = [
            ...MockedState.tasks.slice(0, 6),
            { id: '7', title: 'Task 7 (pinned)', state: 'TASK_PINNED' },
            { id: '8', title: 'Task 8 (pinned)', state: 'TASK_PINNED' },
            ...MockedState.tasks.slice(8, MockedState.tasks.length),
        ];

        return (
            <Mockstore
                taskboxState={{
                    ...MockedState,
                    tasks: pinnedtasks,
                }}
            >
                {story()}
            </Mockstore>
        );
    },
];

export const Loading = Template.bind({});
Loading.decorators = [
    (story) => (
        <Mockstore
            taskboxState={{
                ...MockedState,
                status: 'loading',
            }}
        >
            {story()}
        </Mockstore>
    ),
];

export const Empty = Template.bind({});
Empty.decorators = [
    (story) => (
        <Mockstore
            taskboxState={{
                ...MockedState,
                tasks: [],
            }}
        >
            {story()}
        </Mockstore>
    ),
];