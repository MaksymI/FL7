import React, { Component } from 'react';
import './StudentComponent.css';

class StudentComponent extends Component {

    // constructor (props) {
    //     super(props);
    // }

  render() {
      return (
        <figure>
              <img src={this.props.img} alt=''></img>
              <figcaption>Name: {this.props.name}</figcaption>
              <figcaption>Email: {this.props.email}</figcaption>
        </figure>
      );
  }

  componentDidMount() {
    console.log('component Did Mounted!');
  }

}

export default StudentComponent;