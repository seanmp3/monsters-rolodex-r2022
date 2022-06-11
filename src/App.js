import {Component} from "react"
import CardList from "./components/card-list/index"
import SearchBox from "./components/search-box/index"

import "./App.css"

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState(() => {
          return {monsters: users}
        })
      })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()

    this.setState(() => {
      return {searchField}
    })
}

  render(){
    const {monsters, searchField} = this.state
    const {onSearchChange} = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className={"search-box"}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App
