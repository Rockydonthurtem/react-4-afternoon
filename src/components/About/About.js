import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import History from '../History/History';
import Contact from '../Contact/Contact';
import Home from './../Home/Home'


export default class About extends Component {
  render() {
    return (
      <div>
        <p>about component</p>
        <div className='subnav'>

          <Link to='/About' className='sub_links'><h3>About</h3></Link>
          <Link to='/History/History' className='sub_links'><h3>History</h3></Link>
          <Link to='/About/Contact' className='sub_links'><h3>Contacts</h3></Link>
        </div>
        <div className='box'>
          {/* <Switch>
            <Route component={History} path='/History/History' />
            <Route component={Contact} path='/About/Contact' />
            <Route component={Home} exact path='/' />
            <Route render={() => (
              <div>
                <h1>About University</h1>
                <p>Loremm</p>
              </div>
            )} exact path='/About' />
          </Switch> */}
        </div>
      </div >
    )
  }
}