import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Auth from './containers/Auth';
import Home from './containers/Home';
import Upload from './containers/Upload';
import Detail from './components/Detail.jsx';
import store from './modules';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <article>
          <Router>
            <Switch>
              <Auth>
                <Route exact path="/" component={Home} />
                <Route exact path="/upload" component={Upload} />
                <Route exact path="/detail" component={Detail} />
              </Auth>
              <Redirect to="/" />
            </Switch>
          </Router>
        </article>
      </Provider>
    );
  }
}
