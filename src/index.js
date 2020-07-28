import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';

import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/cadastro/video' component={ CadastroVideo } />
      <Route path='/cadastro/categoria' component={ CadastroCategoria } />
      <Route component={ () => <div> Erro 404 </div> } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
