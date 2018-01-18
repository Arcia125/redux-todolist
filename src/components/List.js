import React from 'react'

import ListContainer from './styled/ListContainer'
import Title from './styled/Title'
import Todos from './Todos'

const List = ({
  title,
  todos,
}) => {
  return (
    <ListContainer>
      <Title>{title}</Title>
      <Todos todos={todos}/>
    </ListContainer>
  )
}

export default List;
