import './App.css';

import {Home} from './pages/Home';
import {Company} from './company/Company';
import {Navigation} from './pages/NavigationBar';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h3 className = "m-3 d-flex justify-content-center"> 
      EMPRESAS
      </h3>

    <Navigation/>

    <Switch>
      <Route path = '/' component = {Home} exact/>
      <Route path = '/Company' component = {Company} exact/>
    </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
