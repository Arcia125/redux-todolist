import { combineReducers } from 'redux'

const reducerExample = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = combineReducers({
  reducerExample
});

export default reducers;
