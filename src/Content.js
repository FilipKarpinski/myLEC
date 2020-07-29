import React from 'react';
import logo from './img/lec-logo.png';
import studio from './img/studio1.jpeg';

class Content extends React.Component{
render(){
    return(
        <div className='content'>
            <div className='logos'>
            <img src={logo} alt="LEC" className='logo-img'/>
            <img src={studio} alt="studio1" className='studio-img'/>
            </div>
        </div>
    )
}
}

export default Content