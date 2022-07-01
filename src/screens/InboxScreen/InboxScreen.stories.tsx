import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { rest } from 'msw';
import { MockedState } from '../../components/customs/TaskList/TaskList.stories';
import { Provider } from 'react-redux'

import InboxScreen from '.';
import store from '../../store';

import {
    fireEvent,
    within,
    waitFor,
    waitForElementToBeRemoved
} from '@storybook/testing-library';

export default {
    component: InboxScreen,
    title: 'UI/Tasks/InboxScreen',
    decorators: [story => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof InboxScreen>;

const Template: ComponentStory<typeof InboxScreen> = () => <InboxScreen />;

export const Default = Template.bind({});
Default.parameters = {
    msw: {
        handlers: [
            rest.get('https://jsonplaceholder.typicode.com/todos?userId=1',
                (req, res, ctx) => {
                    return res(ctx.json(MockedState.tasks));
                }
            )
        ]
    }
};
Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
        // Simulates pinning the first task
        await fireEvent.click(canvas.getByLabelText('pinTask-1'));
        // Simulates pinning the third task
        await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    });
};


export const Error = Template.bind({});
Error.parameters = {
    msw: {
        handlers: [
            rest.get('https://jsonplaceholder.typicode.com/todos?userId=1',
                (req, res, ctx) => {
                    return res(ctx.status(403));
                }
            )
        ]
    }
}


