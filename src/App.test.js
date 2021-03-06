import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import Counter from './Counter';
import App from './App';

describe('Counter Testing', () => {
  let wrapper;
  // beforeEach => run every function before tests
  beforeEach(() => {
     wrapper = mount(<App />);
  })
  test('renders the title of counter', () => {
    // shallow creates instances of a component.
    // it only renders App component not childs.
    expect(wrapper.find('h1').text()).toContain('This is counter app')
  });

  test('render a button with text of `increment`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  })

  test('render the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0');
  })

  test('render the click event of increment button and increment counter value', () => {
    // find the button
    wrapper.find('#increment-btn').simulate('click');
    // expect the button's func
    expect(wrapper.find('#counter-value').text()).toBe('1')
  })

  test('render the click event of decrement button and decrement counter value', () => {
    // find the button
    wrapper.find('#decrement-btn').simulate('click');
    // expect the button's func
    expect(wrapper.find('#counter-value').text()).toBe('-1')
  })
})

