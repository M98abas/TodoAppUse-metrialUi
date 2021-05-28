import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login'
import Content from './component/Content'
import CreateNew from './component/CreateNew'
ReactDOM.render(
  <Router>
    <Route exact path='/' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/content' component={Content} />
    <Route path='/createnew' component={CreateNew} />
</Router>,
  document.getElementById('root')
);
