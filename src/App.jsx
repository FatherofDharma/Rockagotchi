import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from './components/Header';
import Rock from './components/Rock';
import NewRockForm from './components/NewRockForm';
import Routes from './Routes';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true,
      rockStuff: {
        name: 'Rock Dmitrius Stevenson',
        hunger: 60,
        happiness: 30,
        rest: 300,
      }
    };
    this.handleAddingNewRock = this.handleAddingNewRock.bind(this)
  }
  
  handleAddingNewRock(newName) {
    const newRockStuff = {...this.state.rockStuff }
    newRockStuff.name = newName
    this.setState({formVisibleOnPage: false});
    this.setState({rockStuff: newRockStuff});
  }
  
  render(){
    
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewRockForm
                                onNewRockCreation={this.handleAddingNewRock}
                                /> 
    } else {
     currentlyVisibleContent = <Rock rockStuff={this.state.rockStuff}
                               />
    }
    return (
      <div>
        <Header />
        {currentlyVisibleContent}
      </div>
    );
  };
}

export default App;

