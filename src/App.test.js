import { render, screen } from '@testing-library/react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Counter Testing', () => {
  test('renders the title of counter', () => {
    render(<App />);
    const linkElement = screen.getByText('This is counter app');
    expect(linkElement).toBeInTheDocument();
  });
})

