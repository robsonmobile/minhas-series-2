import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home/Home.component';
import Header from './components/Header/Header.component';
import Genres from './components/Genres/Genres.component';
import NovoGenero from './components/NovoGenero/NovoGenero.component';
import EditarGenero from './components/EditarGenero/EditarGenero.component';

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
        <Route exact path="/generos/:id" component={EditarGenero} />
        <Route exact path="/generos/novogenero" component={NovoGenero} />
        <Route path="/generos" component={Genres} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App;
