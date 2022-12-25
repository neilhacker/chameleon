import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div>

      <Header/>
      <Main/>
    </div>
  )
}

export default App;
