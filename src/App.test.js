import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders header and handles counter increments', () => {
  render(<App />);
  
  // Verify header text is present
  const headerElement = screen.getByText(/My First React App/i);
  expect(headerElement).toBeInTheDocument();

  // Verify counter starts at 0
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();

  // Find the button and click it
  const buttonElement = screen.getByRole('button', { name: /Increase/i });
  fireEvent.click(buttonElement);

  // Verify counter increments to 1
  const updatedCountElement = screen.getByText(/Count: 1/i);
  expect(updatedCountElement).toBeInTheDocument();
});

