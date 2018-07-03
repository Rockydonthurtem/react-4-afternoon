import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/About' className='sub_links'><h3>About</h3></Link>
          <Link to='/About/History' className='sub_links'><h3>History</h3></Link>
          <Link to='/About/Contact' className='sub_links'><h3>Contacts</h3></Link>
        </div>
        <div className='box'>
          <Switch>
            <Routes component={History} path='../History/History' />
            <Routes component={Contact} path='../Contact/Contact' />
            <Routes component={About} render={() => (
              <div>
                <h1>About University</h1>
                <p>Loremm</p>
              </div>
            )} />
          </Switch>
        </div>
      </div >
    )
  }
}