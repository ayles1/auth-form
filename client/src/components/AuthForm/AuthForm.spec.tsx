import App from '@/App';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Auth Form ', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Should be in the document', () => {
    const input = screen.getByLabelText('Password');
    expect(input).not.toBeNull();
  });
  it('Should be an error while incorrect password', () => {
    const input = screen.getByLabelText('Password');
    fireEvent.change(input, { target: { value: '123' } });
    console.log(input);
    expect(input).toHaveStyle('border-color:2px solid red');
  });
});
