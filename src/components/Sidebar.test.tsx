import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import { expect, test } from 'vitest';

test('Sidebar renders successfully', () => {
  render(<Sidebar />);
  expect(screen.getByText(/NyayaGen/i)).toBeInTheDocument();
  expect(screen.getByText(/Command Hub/i)).toBeInTheDocument();
});
