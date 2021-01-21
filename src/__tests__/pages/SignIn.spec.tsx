import React from 'react';
import { render } from '@testing-library/react-native';
import SignIn from '../../pages/SignIn';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  }
});

describe('SignIn page', () => {
  it('should contain email and password inputs', () => {
    const { getByPlaceholderText } = render(<SignIn />);

    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });
});
