import { BrowserRouter, Link,Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
function Heading(){
    return (
      <BrowserRouter>
      <ul>
      </ul>
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/services">Services Offered</Link>
        <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/services" component={Services}></Route>
        </Switch>
        </BrowserRouter>
    );
}

export default Heading;

