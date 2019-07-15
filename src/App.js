import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/project/:id' component ={ProjectDetails}/>
            <Route path ='/login' component={SignIn}/>
            <Route path ='/signup' component={SignUp}/>
            <Route pathh='/create' component={CreateProject}/>
            <ProjectDetails/>
            <SignIn/>
            <SignUp/>

          </Switch>
        </div>
      </BrowserRouter>

    );
  }
} export default App;
