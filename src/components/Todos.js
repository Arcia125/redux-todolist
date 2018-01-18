import React from 'react'

import Todo from './Todo'

const Todos = ({
  todos,
}) => {
  return todos ? todos.map(({ id, text }) => <Todo text={text} key={id}/>) : null
}

export default Todos;
