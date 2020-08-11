import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './Header.scss';
import './Home.scss';
import './Footer.scss';
import './Schedule.scss';
import './Standings.scss';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Schedule from './Schedule'
import Standings from './Standings'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TeamPage from './TeamPage';
import TeamTiles from './TeamTiles';


function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/schedule' exact component={Schedule} />
      <Route path='/standings' exact component={Standings} />
      <TeamTiles/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
