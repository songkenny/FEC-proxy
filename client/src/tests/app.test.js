import React from 'react';
import App from '../app';
import { shallow } from 'enzyme';

describe('App', () => {
  it('state begins with product ID 1', () => {
    const wrapper = shallow(<App />);
    const pidState = wrapper.state().pid;
    expect(pidState).toEqual(1);
  });

  it('tag2 div text renders correctly', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('#tag2').text();
    expect(text).toEqual('text2');
  });
});
