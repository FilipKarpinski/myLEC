import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TeamPage from './TeamPage';
import XL from "./img/XL.png";
import S04 from "./img/S04.png";
import FNC from "./img/FNC.png";
import G2 from "./img/G2.png";
import MAD from "./img/MAD.png";
import MSF from "./img/MSF.png";
import OG from "./img/OG.png";
import RGE from "./img/RGE.png";
import SK from "./img/SK.png";
import VIT from "./img/VIT.png";


class  TeamTilesRouter extends React.Component {
  render(){
  return (
    <Router>
      <Route path='/FNC' exact component={()=><TeamPage name='FNC' src={FNC} fullname='Fnatic' fullname2='' link1='https://fnatic.com/'/>} />
      <Route path='/G2' exact component={()=><TeamPage name='G2' src={G2} fullname='G2' fullname2='Esports' link1='' link2=''/>} />
      <Route path='/XL' exact component={()=><TeamPage name='XL' src={XL} fullname='Excel' fullname2='Esports' link1='' link2=''/>} />
      <Route path='/SK' exact component={()=><TeamPage name='SK' src={SK} fullname='SK' fullname2='Gaming' link1='' link2=''/>} />
      <Route path='/S04' exact component={()=><TeamPage name='S04' src={S04} fullname='Schalke' fullname2='04' link1='' link2=''/>} />
      <Route path='/OG' exact component={()=><TeamPage name='OG' src={OG} fullname='Origen' fullname2='' link1='' link2=''/>} />
      <Route path='/VIT' exact component={()=><TeamPage name='VIT' src={VIT} fullname='Team' fullname2='Vitality' link1='' link2=''/>} />
      <Route path='/MSF' exact component={()=><TeamPage name='MSF' src={MSF} fullname='Misfits' fullname2='Gaming' link1='' link2=''/>} />
      <Route path='/MAD' exact component={()=><TeamPage name='MAD' src={MAD} fullname='Mad' fullname2='Lions' link1='' link2=''/>} />
      <Route path='/RGE' exact component={()=><TeamPage name='RGE' src={RGE} fullname='Rogue' fullname2='' link1='' link2=''/>} />
    </Router>
  );
  }
}

export default TeamTilesRouter;