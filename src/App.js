import './App.css';
import { Form } from './Form';
import React from 'react';
import { List } from './List';

export class App extends React.Component {
  DOMAIN_URL = "https://api.github.com";
  state = {
    cards : [],
  }
  fetchProfile = async (username) => {
    const url = this.DOMAIN_URL + "/users/" + username;
    try{
      const response = await fetch(url);
      if (response.status === 200) {
        const profile = await response.json();
        return profile;
      } else {
        alert("Please enter a valid username.");
        return null;
      }
    } catch (error) {
      alert("Some error occured. Please try again.");
      return null;
    }
  }
  handleSubmit = async (username) => {
    const profile = await this.fetchProfile(username);
    if (profile != null) {
      let updatedCards = this.state.cards.concat(profile);
      this.setState({cards:updatedCards});
    } 
  }
  handleDelete = (profile) => {
    let updatedCards = this.state.cards.filter((item) => item!==profile);
    this.setState({cards:updatedCards});
  }
  render(){
    return (
      <div>
        <h1 className="pageHeading">The Github Cards App</h1>
        <Form onSubmit={this.handleSubmit}/>
        <List profileCards={this.state.cards} onDeleteCard={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
