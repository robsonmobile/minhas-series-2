import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header.component';

const Home = () => (
  <h1>Home</h1>
)

const Genres = () => (
  <h1>Generos</h1>
)

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/generos" component={Genres} />
      </div>
    </Router>
  );
}

export default App;
