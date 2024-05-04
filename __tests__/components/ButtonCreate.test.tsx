import React from 'react';
import { shallow } from 'enzyme';
import { ButtonCreate } from '../../src/components';

describe('ButtonCreate', () => {
  it('should call onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const wrapper = shallow(<ButtonCreate onPress={onPressMock} />);

    wrapper.find('TouchableOpacity').simulate('press');

    expect(onPressMock).toHaveBeenCalled();
  });

  it('should render correctly', () => {
    const onPressMock = jest.fn();
    const wrapper = shallow(<ButtonCreate onPress={onPressMock} />);

    expect(wrapper).toMatchSnapshot();
  });
});
