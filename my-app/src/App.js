import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import ShowEvents from './pages/showevents';
import Publications from './pages/publications';
import View from './pages/view';
import './firebase';

function App() {
  return (

    <BrowserRouter>

      <Switch>

      <Route path="/events" component={ShowEvents} />
      <Route path="/publications" component={Publications} />
      <Route path="/view" component={View} />
      <Route path="/" component={Home} />

      </Switch>

    </BrowserRouter>
 
  );
}

export default App;
