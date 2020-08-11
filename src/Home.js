import React from "react";
import logo from "./img/lec-logo.png";
import studio1 from "./img/studio1.jpeg";
import studio3 from "./img/studio3.jpg";
import studio2 from "./img/studio2.jpg";
import studio4 from "./img/studio4.jpg";
import studio5 from "./img/studio5.jpg";
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
import TeamTile from "./TeamTile";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'

class Home extends React.Component {

  render() {
    return (
      <div className="content">
        <div className="logoAndStudio">
          <img src={logo} alt="LEC" className="logo" />
          <div studioImages>
            <img src={studio1} alt="studio" className="permaImg" />
            <img src={studio2} alt="studio" className="img" />
            <img src={studio3} alt="studio" className="img" />
            <img src={studio3} alt="studio" className="img" />
            <img src={studio5} alt="studio" className="img" />
          </div>
        </div>
        <div className='teamTiles'>
        <Link to='/FNC'>
        <TeamTile name='FNC' src={FNC} fullname='Fnatic' fullname2=''/>
        </Link>
        <Link to='/G2'>
        <TeamTile name='G2' src={G2} fullname='G2' fullname2='Esports' even='even'/>
        </Link>
        <Link to='/XL'>
        <TeamTile name='XL' src={XL} fullname='Excel' fullname2='Esports'/>
        </Link>
        <Link to='/SK'>
        <TeamTile name='SK' src={SK} fullname='SK' fullname2='Gaming' even='even'/>
        </Link>
        <Link to='/S04'>
        <TeamTile name='S04' src={S04} fullname='Schalke' fullname2='04'/>
        </Link>
        <Link to='/OG'>
        <TeamTile name='OG' src={OG} fullname='Origen' fullname2='' even='even'/>
        </Link>
        <Link to='/VIT'>
        <TeamTile name='VIT' src={VIT} fullname='Team' fullname2='Vitality'/>
        </Link>
        <Link to='/MSF'>
        <TeamTile name='MSF' src={MSF} fullname='Misfits' fullname2='Gaming' even='even'/>
        </Link>
        <Link to='/MAD'>
        <TeamTile name='MAD' src={MAD} fullname='Mad' fullname2='Lions'/>
        </Link>
        <Link to='/RGE'>
        <TeamTile name='RGE' src={RGE} fullname='Rogue' fullname2='' even='even'/>
        </Link>
        </div>
      </div>
    );
  }
}

export default Home;
