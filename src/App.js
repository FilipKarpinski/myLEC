import React from 'react';
import './App.scss';
import './Header.scss';
import './Home.scss';
import './Footer.scss';
import './Schedule.scss';
import './Standings.scss';
import './TeamPage.scss'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Schedule from './Schedule'
import Standings from './Standings'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TeamTilesRouter from './TeamTilesRouter';
import ScrollToTop from './ScrollToTop';
import $ from 'jquery'


function App() {
  $(document).mouseup(function (e) { 
    if ($(e.target).closest(".nav-container").length 
                === 0 &&$(window).width()<=1000) { 
        $(".nav-container").hide(); 
    } 
});
  return (
    <Router>
      <ScrollToTop/>
    <div>
      <Header/>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/schedule' exact component={Schedule} />
      <Route path='/standings' exact component={Standings} />
      <TeamTilesRouter/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
