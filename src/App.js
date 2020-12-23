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
import {Switch, Route, useLocation} from 'react-router-dom';
//animation
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key = {location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
