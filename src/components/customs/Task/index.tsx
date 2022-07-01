import React from 'react'
import './styles.scss'
import styles from './Task.module.scss'


type Task = {
    id: string,
    title: string,
    state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'
}

type TaskProps = {
    task: Task,
    onArchiveTask: (id: string) => void,
    onPinTask: (id: string) => void
}

const Task = (props: TaskProps) => {
    const { onArchiveTask, onPinTask } = props;
    const { id, title, state } = props.task;
    return (
        <div className={['list-item', state].join(' ')}>
            <label htmlFor='checked'
                aria-label={`archivedTask-${id}`}
                className='checkbox'
            >
                <input type="checkbox"
                    disabled={true}
                    name="checked"
                    id={`archivedTask-${id}`}
                    checked={state === 'TASK_ARCHIVED'}
                />
                <span className='check-custom' onClick={() => onArchiveTask(id)} />
            </label>

            <label htmlFor="title" aria-label={title} className='title'>
                <input type="text" value={title} readOnly={true} name="title" placeholder='Input title' />
            </label>

            {state !== 'TASK_ARCHIVED' && (
                <button
                    className='pin-button'
                    onClick={() => onPinTask(id)}
                    id={`pinTask-${id}`}
                    aria-label={`pinTask-${id}`}
                    key={`pinTask-${id}`}
                >
                    <span className='icon-star' />
                </button>
            )}
        </div>
    )
}

export default Task