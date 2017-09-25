import React, { Component } from 'react';
import './StudentListComponent.css';
import { students } from './students'
import StudentComponent from './StudentComponent';

class StudentListComponent extends Component {
    
    // constructor (props) {
    //     super(props);
    // }

  render() {
      return (
         <div> 
             {students.map((student)=> <StudentComponent {...student}/>)})}
        </div>
      );
  }

  componentWillMount() {
    console.log('component Will Mount!');
  }

}

export default StudentListComponent;