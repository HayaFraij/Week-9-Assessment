import React, { Components } from 'react';
import logo from './logo.svg';
import userInput from './components/UserInput'
import userOutput from './components/UserOutput'




class App extends components() {
  state = {
    tasks: [
      {
        id: 1,
        title: 'lets do something'
      },
      {
        id: 2,
        title: 'lets do something else'
      }
    ]
  }


  render(){
  return (
    <div>
      <h1> Main Component!</h1>
      <userInput tasks={this.state.tasks} />
    </div>
  )};
}

export default App;
