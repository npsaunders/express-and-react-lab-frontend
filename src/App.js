import './App.css';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

//import Route & Switch
import { Route, Switch } from 'react-router-dom';

//import pages
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';


function App() {
  const URL = "https://express-and-react.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
