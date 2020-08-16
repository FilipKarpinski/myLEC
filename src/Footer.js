import React from 'react';
import LecTextLogo from "./img/lec-text-logo.png";

class Footer extends React.Component{
render(){
    return(
        <div className='footer'>
            <img src={LecTextLogo} alt="LEC"/>
            <p>Sample text to put in Footer</p>
        </div>
    )
}
}

export default Footer