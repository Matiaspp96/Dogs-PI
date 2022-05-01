import { Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Detail from './components/Detail';
import Home from './components/Home';
import Landing from './components/Landing';
import s from './App.css'

function App() {
  return (
    <div className={s.App}>
      <Switch>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route path='/dogs/:id'>
        <Detail/>
      </Route>
      <Route path='/dogs' >
        <Home />
      </Route>
      <Route path='/create' >
        <Create />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
