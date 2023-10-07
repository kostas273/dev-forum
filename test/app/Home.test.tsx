import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  test('loads and displays greeting', () => {
    render(<Home />);
    const element = screen.getByText('This is a Next.js project template.');
    expect(element).toBeInTheDocument();
  });
});
