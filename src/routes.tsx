import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { ListExams } from "./pages/ListExams";
import { Login } from "./pages/Login";

export default function Routes() {
  return (
    <Router>      
        <Switch>    
            <Route exact path="/" >
              <div className="content">
                <Header />
                <Login />        
              </div>
            </Route>
            <Route path="/dashboard">
              <ListExams />
            </Route>  
        </Switch>
    </Router>
  );
}
