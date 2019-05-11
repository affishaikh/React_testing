import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
});

test('should have two boxes', () => {
  const wrapper = shallow(<App />);
  const displayBox = wrapper.find("[data-test='display-box']");
  expect(displayBox.length).toBe(2);
});

test('should render display for count', () => {
  const wrapper = shallow(<App />);
  const displayCount = wrapper.find("[data-test='display-count']");
  expect(displayCount.length).toBe(1);
});

test('should render increment button', () => {
  const wrapper = shallow(<App />);
  const incrementButton = wrapper.find("[data-test='inc-button']");
  expect(incrementButton.length).toBe(1);
});

test('should incremnt counter display when incrment button is clicked', () => {
  const wrapper = shallow(<App />);

  const incrementButton = wrapper.find("[data-test='inc-button']");
  incrementButton.simulate('click');
  incrementButton.simulate('click');
  incrementButton.simulate('click');
  wrapper.update();
  expect(wrapper.state().count).toBe(2);
});
