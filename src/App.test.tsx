import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const ref = screen.getByText("My React (Boilerplate)");
  expect(ref).toBeInTheDocument();
})