import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit'

import Task from '../../components/customs/Task';

import mockTasks from '../../data/tasks.json';

export interface TaskBoxState {
    tasks: Task[],
    status: 'idle' | 'loading',
    error: null,
}

const initialState: TaskBoxState = {
    tasks: mockTasks as Task[],
    status: 'idle',
    error: null
}

const tasksSlice = createSlice({
    name: 'taskbox',
    initialState,
    reducers: {
        updateTaskState: (state, action: PayloadAction<{ id: string, state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED' }>) => {
            const { id, state: newTaskState } = action.payload;
            const taskIndex = state.tasks.findIndex(task => task.id === id);
            if (taskIndex >= 0) {
                state.tasks[taskIndex].state = newTaskState;
            }
        },
    },
});

export const { updateTaskState } = tasksSlice.actions;

export default tasksSlice.reducer;