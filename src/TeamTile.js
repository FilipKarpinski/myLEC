import React from 'react';
import {Link} from 'react-router-dom'


class TeamTile extends React.Component{
    render(){
        return(
        <div className='teamTile'>
            <img src={this.props.src} alt={this.props.name} width='200' height='200'/>
            <p>{this.props.fullname}
            <br/>
            {this.props.fullname2}</p>
        </div>
        )
    }
    }
    
    export default TeamTile