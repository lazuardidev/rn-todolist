import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ButtonComplete} from '../../src/components';

describe('ButtonComplete', () => {
  it('should call onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(<ButtonComplete onPress={onPressMock} />);
    fireEvent.press(getByTestId('button-complete'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should render correctly', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(<ButtonComplete onPress={onPressMock} />);
    expect(getByTestId('button-complete')).toBeTruthy();
  });
});
