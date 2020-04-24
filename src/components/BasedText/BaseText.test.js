import React from 'react';
import { shallow } from 'enzyme';
import BaseText from './index';

const setup = (propOverrides) => {
  const props = {
    children: 'Test',
    ...propOverrides,
  };
  const wrapper = shallow(<BaseText {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('BaseText check snapShot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('BaseText check render', () => {
  test('should render with title text', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Text').props().children).toEqual('Test');
  });
  test('should can pass props color', () => {
    const { wrapper } = setup({
      color: 'red',
      size: 1,
      weight: '500',
    });
    expect(wrapper.find('Text')).toMatchSnapshot();
  });
});
