import { render, screen } from '@testing-library/react';
import HelloWorld from './hello-world';

test('renders learn react link', () => {
  render(<HelloWorld />);
  const linkElement = screen.getByTestId('tittle');
  expect(linkElement).toBeTruthy();
});
