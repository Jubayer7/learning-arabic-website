import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Headear/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import Support from './components/Support/Support';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="service">
          <Services></Services>
        </Route>
        <Route path="/support">
          <Support></Support>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        {/* <Route path="*">
          <NotFound></NotFound>
        </Route> */}
      </Switch>

    </Router>
  );
}

export default App;
