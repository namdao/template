import React from 'react';
import { shallow } from 'enzyme';
import LineBreak from './index';

const setup = (propOverrides) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<LineBreak {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('LineBreak check snapShot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
