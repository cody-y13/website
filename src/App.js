import React from 'react';
//global style
import Globalstyle from './components/globalstyle';
//import pages
import Aboutus from './pages/aboutus';
import Nav from './components/nav';
import Contactus from './pages/contactus';
import Ourwork from './pages/ourwork';
import Moviedetail from './pages/moviedetail';
//router
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Aboutus />
        </Route>
        <Route path="/work" exact>
          <Ourwork />
        </Route>
        <Route path="/work/:id">
          <Moviedetail/>
        </Route>
        <Route path="/contact">
          <Contactus />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
