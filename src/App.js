import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home/Home.component';
import Header from './components/Header/Header.component';
import Genres from './components/Genres/Genres.component';

function App() {
  const [data, setData] = useEffect({})
  useEffect(() => {
    axios.get('/api'.then(res => {
      setData(res.data)
    }))
  }, [setData])

  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/generos" component={Genres} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App;
