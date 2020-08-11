import React from 'react';
import {Link} from 'react-router-dom'


class TeamTile extends React.Component{
    render(){
        if(this.props.even=='even')
        return(
        <div className='teamTile even'>
            <img src={this.props.src} alt={this.props.name} width='200' height='200'/>
            <p>{this.props.fullname}
            <br/>
            {this.props.fullname2}</p>
        </div>
        )
        else
        return(
            <div className='teamTile odd'>
                <img src={this.props.src} alt={this.props.name} width='200' height='200'/>
                <p>{this.props.fullname}
                <br/>
                {this.props.fullname2}</p>
            </div>
            )
    }
    }
    
    export default TeamTile