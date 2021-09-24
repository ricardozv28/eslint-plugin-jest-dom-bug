import React from 'react';
import '@testing-library/jest-dom';

import { getByLabelText, render } from '@testing-library/react';

function App() {
  return (
    <div>
      <button disabled={true}>My Button</button>
      <label htmlFor='my-input'>My Input</label>
      <input id='my-input' value='value' />
    </div>
  );
}

describe('test', () => {
  it('jest-dom', () => {
    const { getByRole, getByLabelText } = render(<App />);
    const button = getByRole('button', { name: 'My Button' });
    expect(button.disabled).toBe(true);

    const input = getByLabelText('My Input');
    expect(input.value).toBe('value');
  });
});
