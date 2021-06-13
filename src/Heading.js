import { BrowserRouter, Link,Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
function Heading(){
    return (
      <BrowserRouter>
      <ul>
      </ul>
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        </Switch>
        </BrowserRouter>
    );
}

export default Heading;

