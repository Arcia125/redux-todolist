import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
  let component;
  it('renders without crashing', () => {
    component = shallow(<App />);
  });
  it('matches our snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});


