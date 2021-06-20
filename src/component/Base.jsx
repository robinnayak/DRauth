import React from "react";
import { Route } from "react-router-dom";
import Fake from "../Fake";
import ArticleDetail from "./ArticleDetail";
import Articlelist from "./Articlelist";
import Login from "./Login";
import Register from "./Register";
function Base() {
  const BaseApi = "http://localhost:8000/";
  return (
    <div>
      <Route exact path="/">
        <Articlelist BaseApi={BaseApi} />
      </Route>
      <Route exact path="/detail">
        <ArticleDetail BaseApi={BaseApi} />
      </Route>
      <Route exact path="/login">
          <Login BaseApi={BaseApi}/>
      </Route>
      <Route exact path="/register" >
        <Register BaseApi={BaseApi}/>
      </Route>
      <Route exact path="/fake" component={Fake} />
    </div>
  );
}


export default Base;

