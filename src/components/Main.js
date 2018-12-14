import React from 'react';
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Films from "./Films";
import People from "./People";
import Planets from "./Planets";
import Species from "./Species";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import "./Main.css";
 
const Main = () => {
  return (
        <BrowserRouter basename='/star-wars/'>
          <div>
            <h1 className="tc yellow f1 lh-title">Star Wars</h1>
            <ul className="pagenav">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/films">Films</NavLink></li>
              <li><NavLink to="/people">People</NavLink></li>
              <li><NavLink to="/planets">Planets</NavLink></li>
              <li><NavLink to="/species">Species</NavLink></li>
              <li><NavLink to="/starships">Starships</NavLink></li>
              <li><NavLink to="/vehicles">Vehicles</NavLink></li>
            </ul>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/films" component={Films}/>
              <Route path="/people" component={People}/>
              <Route path="/planets" component={Planets}/>
              <Route path="/species" component={Species}/>
              <Route path="/starships" component={Starships}/>
              <Route path="/vehicles" component={Vehicles}/>
            </div>
          </div>
        </BrowserRouter>
    );
};

export default Main;