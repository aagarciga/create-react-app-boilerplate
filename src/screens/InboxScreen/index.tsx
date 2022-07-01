import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../../components/customs/TaskList';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../store';
import { fetchTasksAsync } from '../../store/slices/tasksSlice';

type Props = {}

const InboxScreen = (props: Props) => {
    const dispatch = useAppDispatch();
    const { error } = useAppSelector((state: RootState) => state.taskbox);

    useEffect(() => {
        dispatch(fetchTasksAsync());
    }, []);

    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad" />
                    <p className="title-message">Oh no!</p>
                    <p className="subtitle-message">Something went wrong</p>
                </div>
            </div>
        );
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">Taskbox</h1>
            </nav>
            <TaskList />
        </div>
    )
}

export default InboxScreen