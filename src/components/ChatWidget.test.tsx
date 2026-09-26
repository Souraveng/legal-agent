import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ChatWidget from './ChatWidget';
import { expect, test } from 'vitest';

test('ChatWidget renders successfully', () => {
  render(<ChatWidget />);
  expect(screen.getByRole('button', { name: /Open Chat/i })).toBeTruthy();
});
