import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import AboutMe from './AboutMe';
import SideDrawer from './SideDrawer';
import BackDrop from './Backdrop';

function App() {

  const submit = () => {
      
  }

  const reset = () => {

  }
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <div className="App">
          <Header click={() => setSideToggle(true)}/>
          <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
          <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Resume">
              <Resume/>
            </Route>
            <Route path="/AboutMe">
              <AboutMe submit={submit} reset={reset}/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
