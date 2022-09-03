import React from 'react';
import Home from './components/Home';
import Search from './components/Search';
import Details from './components/Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="details/:launchId" element={<Details />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
