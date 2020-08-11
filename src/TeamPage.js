import React from 'react';


class TeamPage extends React.Component{
    state={
    }
render(){
    return(
        <div>
            <img src={this.props.src} alt={this.props.name} width='400' height='400'/>
            <p>{this.props.fullname}
            <br/>
            {this.props.fullname2}</p>
        </div>
    )
}
}

export default TeamPage