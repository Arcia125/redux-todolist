import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import List from './List';


describe('List', () => {
  let component;
  it('renders without crashing', () => {
    component = shallow(<List />);
  });

  it('matches our snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders with a title', () => {
    const title = 'Test'
    const component = render(<List title={title} />)
    expect(component.text()).toEqual(title)
  });

});


