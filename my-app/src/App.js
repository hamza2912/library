import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (

    <BrowserRouter>

      <Switch>

      <Route path="/home" component={Home} />
      <Route path="/" component={Home} />

      </Switch>

    </BrowserRouter>
 
  );
}

export default App;
