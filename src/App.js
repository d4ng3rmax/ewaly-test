import React from 'react';
import { store, persistor } from './store';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react"

// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));


const App = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/" name="Login Page" render={props => <Login {...props} />} />
              <Route path="/balance" name="Home" render={props => <DefaultLayout {...props}/>} />
              <Route name="Page 404" render={props => <Page404 {...props} />} />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
