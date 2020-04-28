import React from 'react';
import { Keyboard } from 'react-native';
import { shallow } from 'enzyme';
import KeyboardAware from './KeyboardAware';

const setup = (propOverrides) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<KeyboardAware {...props} />);
  return {
    props,
    wrapper,
  };
};

Keyboard.addListener = jest.fn();

describe('KeyboardAware check render', () => {
  test('check componentWillMount', () => {
    const { wrapper } = setup();
    wrapper.instance().UNSAFE_componentWillMount();
    expect(Keyboard.addListener).toBeCalledTimes(4);
  });
  test('check unMount', () => {
    const { wrapper } = setup();
    wrapper.instance().UNSAFE_componentWillMount();
    wrapper.instance().keyboardWillShowSub = {
      remove: jest.fn(),
    };
    wrapper.instance().keyboardWillHideSub = {
      remove: jest.fn(),
    };
    wrapper.instance().componentWillUnmount();
    expect(wrapper.instance().keyboardWillShowSub.remove).toBeCalled();
    expect(wrapper.instance().keyboardWillHideSub.remove).toBeCalled();
  });
});

describe('KeyboardAware check snapShot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
