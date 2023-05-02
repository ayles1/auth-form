import App from '@/App';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeAll, describe, it } from 'vitest';

describe('App', () => {
  beforeAll(() => {
    render(<App />);
  });
  it('Should be in login page', () => {
    const location = window.location.pathname;
    expect(location).toEqual('/login');
  });
  it('Should have header and footer', () => {
    const header = screen.getByTestId('header');
    const footer = screen.getByTestId('footer');

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
