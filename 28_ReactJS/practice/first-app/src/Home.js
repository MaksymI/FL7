import React, { Component } from 'react';
import './Home.css';
import StudentListComponent from './StudentListComponent';

class Home extends Component {
  render() {
      return (
      <div>
          <h1>Hello from Home Component!!!</h1>
          <StudentListComponent/>
      </div>
      );
  }

  componentWillMount() {
    console.log('component Will Mount!');
  }

  componentDidMount() {
    console.log('component Did Mounted!');
  }

  componentWillUpdate() {
    console.log('component Did Mounted!');
  }
}

export default Home;