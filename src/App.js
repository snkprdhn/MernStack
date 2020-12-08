import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import TravelsList from "./components/travels-list.component";
import EditTravel from "./components/edit-travel.component";
import CreateTravel from "./components/create-travel.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={TravelsList} />
      <Route path="/edit/:id" component={EditTravel} />
      <Route path="/create" component={CreateTravel} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
