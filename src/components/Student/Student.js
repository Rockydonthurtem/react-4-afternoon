import React, { Component } from 'react';
import Axios from 'axios';

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    }
  }
  componentDidMount() {
    return axios.post(`http://localhost:3005/students/${this.props.match.params.id}`).then(results => {
      this.setState({ studentInfo: results.data })
    })

  }

  render() {

    return (
      <div className='box'>
        <h1>Student</h1>
        <h1>{this.state.studentinfo.first.name}  {this.state.studentinfo.first.name}</h1>
        <h3>Grade:{this.state.studentInfo.grade}</h3>
        <h3>Email:{this.state.studentInfo.email}</h3>
      </div>
    )
  }
}