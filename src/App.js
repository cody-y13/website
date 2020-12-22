import React from 'react';
//global style
import Globalstyle from './components/globalstyle';
//import pages
import Aboutus from './pages/aboutus';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <Aboutus />
    </div>
  );
}

export default App;
