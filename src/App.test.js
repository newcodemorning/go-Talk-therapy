import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage hero title', () => {
  render(<App />);
  const heroHeading = screen.getByRole('heading', { name: /change your mind/i });
  expect(heroHeading).toBeInTheDocument();
});
