import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../src/App';

describe('App', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId('Home')).toBeDefined();
  });
});
