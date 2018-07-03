import React from 'react';
import { Switch, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student'


export default routes(
    <Switch>
        <Routes components={Home} exact path='/' />
        <Routes components={About} path='/About' />
        <Routes components={ClassList} path='/classlist/:class' />
        <Routes components={Studnet} path='./student/:id' />
    </Switch>
)