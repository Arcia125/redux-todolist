import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Todo from './Todo';


describe('Todo', () => {
  let component;
  it('renders without crashing', () => {
    component = shallow(<Todo />);
  });

  it('matches our snapshot', () => {
    expect(component).toMatchSnapshot();
  });

});


