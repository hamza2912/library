import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import ShowEvents from './pages/showevents';
import Publications from './pages/publications';
import View from './pages/view';
import Onlinepdf from './pages/onlinepdf';
import KnowledgeGateway from './pages/gateway';
import './firebase';

function App() {
  return (

    <BrowserRouter>

      <Switch>

      <Route path="/knowledge-gateway" component={KnowledgeGateway} />
      <Route path="/events" component={ShowEvents} />
      <Route path="/publications" component={Publications} />
      <Route path="/view" component={View} />
      <Route path="/onlinepdf" component={Onlinepdf} />
      <Route path="/" component={Home} />

      </Switch>

    </BrowserRouter>
 
  );
}

export default App;
