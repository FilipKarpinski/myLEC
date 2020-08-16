import React from 'react';


class TeamPage extends React.Component{

render(){
    let link=''
    this.props.fullname2==''?link='https://lol.gamepedia.com/'+this.props.fullname:link='https://lol.gamepedia.com/'+this.props.fullname+'_'+this.props.fullname2
    return(
        <div className='teamPage'>
            <div className='content'>
            <p>{this.props.fullname}
            <br/>
            {this.props.fullname2}</p>
            <img src={this.props.src} alt={this.props.name} width='400' height='400'/>
            </div>
            <div className='links'>
            <a href={this.props.link1} target="_blank">{this.props.name}'s main page</a>
            <a href={link} target="_blank">{this.props.name}'s gamepedia page</a>
    </div>
        </div>
    )
}
}

export default TeamPage