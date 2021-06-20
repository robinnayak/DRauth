import React from 'react'
import FetchData from './FetchData'
import Fake from './component/Fake'
import { Route, Switch } from "react-router-dom";
import Login from './component/authentication/Login';
import Register from './component/authentication/Register';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/data" component={FetchData}/>
        <Route exact path="/fake" component={Fake}/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </div>
  )
}

export default App
