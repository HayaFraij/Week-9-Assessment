import React, { Components } from 'react';



class userOutput extends components() {
    render(){
    return (
      <div>
          {this.props.tasks.map(elem => {
              <userOutput key={elem.id}/>
          })}
      </div>
    )};
  }


export default App;
