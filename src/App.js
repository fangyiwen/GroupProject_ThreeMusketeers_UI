import React from 'react';
import './App.css';

import Home from "./pages/Home"
import Sites from "./pages/Sites"
import SingleSite from "./pages/SingleSite"
import Error from "./pages/Error"

function App() {
  return (
    <div>
      <Home></Home>
      <Sites></Sites>
      <SingleSite></SingleSite>
      <Error></Error>
    </div>);
}

export default App;
