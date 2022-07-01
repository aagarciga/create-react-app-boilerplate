import React from 'react'
import './styles.scss'
import styles from './TaskList.module.scss'

import Task from '../Task'

type TaskListProps = {
    isLoading: boolean;
    tasks: Array<Task>;
    onPinTask: (id: string) => void;
    onArchiveTask: (id: string) => void;
}

const TaskList = ({ isLoading, tasks, onPinTask, onArchiveTask }: TaskListProps) => {
    const events = {
        onPinTask,
        onArchiveTask
    };
    const LoadingRow = (
        <div className='loading-item'>
            <span className='glow-checkbox' />
            <span className='glow-text'>
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>

        </div>
    );

    if (isLoading) {
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

    const tasksInOrder = [
        ...tasks.filter((t) => t.state === "TASK_PINNED"),
        ...tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];

    return (
        <div className={['list-items', styles['list-items']].join(' ')}>

            {
                tasksInOrder.map(task => (
                    <Task key={task.id} task={task} {...events} />
                ))
            }</div>
    )
}

export default TaskList