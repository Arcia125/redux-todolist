import React, { Component } from 'react';

import PageContainer from './components/styled/PageContainer'
import List from "./components/List"

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageContainer>
          <List />
        </PageContainer>
      </div>
    );
  }
}

export default App;
