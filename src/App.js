import logo from './logo.svg';
import React, { Component } from 'react';
import { CardList } from './Components/Card-list/card-list.component';
import './App.css';
import { SearchBox } from './Components/SearchBox/searchBox.component';


class App extends Component {

  constructor()
  {
    super();

    
    this.state =
    {
      monsters:[],
      searchField : ''
    }
  } 
  changeHandler = (e)=>
  {
    this.setState({searchField:e.target.value})
  }
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users=>this.setState({monsters : users}))
    
  }

  render()
  {
    const {monsters , searchField} = this.state

    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return (   
      <div className="App">

          <h1>Monster Rolodex</h1>
          <SearchBox placeholder="search Monster" changeHandler={this.changeHandler}/>

          <CardList monsters = {filterdMonsters}/>
        
          
    
    </div>
      
      )
  }

}
export default App;
