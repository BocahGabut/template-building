import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.scss';

import {
  Routes, Route
} from "react-router-dom";

import Theme1 from './page/theme-1';
import Theme2 from './page/theme-2';
import Theme200219 from './editable/theme-2';
import Theme3 from './page/theme-3';
// import Theme4 from './page/theme-4';
import Builder from './page/builder';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
    <div className="App">
     <Routes>
      <Route exact path="/configuration" element={<Builder />} />
      {/* <Route exact path="/" element={<Theme3 />} /> */}
      <Route exact path="/theme1" element={<Theme1 />} />
      <Route exact path="/theme2" element={<Theme2 />} />
      <Route exact path="/theme3" element={<Theme3 />} />
      {/* <Route exact path="/theme4" element={<Theme4 />} /> */}
      {/* Routes editable */}
      <Route exact path="/theme2-edit" element={<Theme200219 />} />
     </Routes>
    </div>
  );
}

export default App;
