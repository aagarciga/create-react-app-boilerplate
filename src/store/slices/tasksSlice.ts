import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit'

import Task from '../../components/customs/Task';

import mockTasks from '../../data/tasks.json';
import { AppDispatch } from '..';

export interface TaskBoxState {
    tasks: Task[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null | string,
}

const initialState: TaskBoxState = {
    tasks: mockTasks as Task[],
    status: 'idle',
    error: null
}

export const fetchTasksAsync = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
    const data = await response.json();
    const result = data.map((task: any) => ({
        id: `${task.id}`,
        title: task.title,
        state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX'
    }));
    return result;
});

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
    extraReducers(builder) {
        builder
            .addCase(fetchTasksAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.tasks = [];
            })
            .addCase(fetchTasksAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.tasks = action.payload;
            })
            .addCase(fetchTasksAsync.rejected, (state) => {
                state.status = 'failed';
                state.error = "Something went wrong";
                state.tasks = [];
            })
    },
});


export const { updateTaskState } = tasksSlice.actions;

export default tasksSlice.reducer;