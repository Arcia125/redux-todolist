import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import List from './List';


describe('List', () => {
  let component;
  it('renders without crashing', () => {
    component = shallow(<List />);
  });
  it('matches our snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});


