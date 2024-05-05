import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ButtonCreate} from '../../src/components';

describe('ButtonCreate', () => {
  it('should call onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(<ButtonCreate onPress={onPressMock} />);
    fireEvent.press(getByTestId('button-create'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should render correctly', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(<ButtonCreate onPress={onPressMock} />);
    expect(getByTestId('button-create')).toBeTruthy();
  });
});
