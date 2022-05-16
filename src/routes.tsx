import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { ListExams } from "./pages/ListExams";
import { Login } from "./pages/Login";
import { AuthProvider } from "./auth";

export default function Routes() {
  return (
    <Router>      
        <Switch>    
          <AuthProvider>
            <Route exact path="/" >
              <div className="content">
                <Header />
                <Login />        
              </div>
            </Route>
            <Route path="/dashboard">
              <ListExams />
            </Route>  
          </AuthProvider>      
        </Switch>
    </Router>
  );
}
