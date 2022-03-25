import React, { Fragment } from "react";
import {Route,Routes} from "react-router-dom";
import Gallary from "./Components/Gallary";
import Home from "./Components/Home";
import {routes} from "./Routes/routes";
import {savedImageDetailsContext} from "./Context/PokemonGallaryContext";

const App = () => {

let savedImages = [];

  return (
    <Fragment>
      <div className="App">
        <h1>Welcome to pokemon page!!!</h1>
        <savedImageDetailsContext.Provider value={savedImages}>
          <div>
            <Routes>
              <Route exact path={routes.home} element={<Home/>}/>
              <Route path={routes.gallary} element={<Gallary/>}/>
            </Routes>
          </div>
        </savedImageDetailsContext.Provider>
      </div>
    </Fragment>
  );
}

export default App;
