import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Lists from "./components/Lists/Lists";
import AddItem from "./components/AddItem/AddItem";


class App extends Component {
  state = {
    isUIupdated: false
  }

  updateUi = (val) => {
    this.setState({ isUIupdated: val });
  }

  render() {
    return (
      <div className="container">
        <AddItem update={this.updateUi} />
        <Lists isUpdated={this.state.isUIupdated} />
      </div>
    );
  }
}

export default App;
