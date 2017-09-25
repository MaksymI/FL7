import React, { Component } from 'react';
import StudentListComponent from './StudentListComponent';
import './App.css';
import { students } from './students'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentListComponent students={students}/>
      </div>
    );
  }
}

export default App;
