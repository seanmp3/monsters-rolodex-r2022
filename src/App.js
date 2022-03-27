import { Component } from "react";

import "./App.css";

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [
        { 
          name: "Bob",
          id: "0"
        },
        {
          name: "Carl",
          id: "1"
        },
        { 
          name: "Lee",
          id: "2"
        }
      ]
    };
  }
  render(){
    return <div className="App">
      {
        this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })
      }
    </div>;
  }
}

export default App;
