import { render, screen } from '@testing-library/react';
import Header from './Header';
import { expect, test } from 'vitest';

test('Header renders successfully', () => {
  render(<Header />);
  expect(screen.getByText(/New Matter Intake/i)).toBeInTheDocument();
});
