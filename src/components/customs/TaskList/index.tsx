import React from 'react';

import Task from '../Task';

import './styles.scss';
import styles from './TaskList.module.scss';

import { updateTaskState } from '../../../store/slices/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';

const TaskList = () => {

    const tasks = useAppSelector((state) => {
        const tasksInOrder = [
            ...state.taskbox.tasks.filter((t: Task) => t.state === 'TASK_PINNED'),
            ...state.taskbox.tasks.filter((t: Task) => t.state !== 'TASK_PINNED')
        ]
        const filteredTasks = tasksInOrder.filter(
            (t: Task) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
        );

        return filteredTasks;
    });

    const { status } = useAppSelector((state) => state.taskbox);

    const dispatch = useAppDispatch();

    const pinTask = (value: string) => {
        dispatch(updateTaskState({ id: value, state: 'TASK_PINNED' }));
    }

    const archiveTask = (value: string) => {
        dispatch(updateTaskState({ id: value, state: 'TASK_ARCHIVED' }));
    }

    const LoadingRow = (
        <div className='loading-item'>
            <span className='glow-checkbox' />
            <span className='glow-text'>
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );

    if (status === 'loading') {
        return (
            <div className="list-items" data-testid="loading" key={"loading"}>
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>);
    }
    if (tasks.length === 0) {
        return (
            <div className="list-items" key={"empty"} data-testid="empty">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <p className="title-message">You have no tasks</p>
                    <p className="subtitle-message">Sit back and relax</p>
                </div>
            </div>
        );
    }

    return (
        <div className={['list-items', styles['list-items']].join(' ')}>

            {
                tasks.map((task: Task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onPinTask={(task) => pinTask(task)}
                        onArchiveTask={(task) => archiveTask(task)}
                    />
                ))
            }
        </div>
    )
}

export default TaskList