import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Todos from './Todos';


describe('Todos', () => {
  let component;
  it('renders without crashing', () => {
    component = shallow(<Todos />);
  });

  it('matches our snapshot', () => {
    expect(component).toMatchSnapshot();
  });

});
