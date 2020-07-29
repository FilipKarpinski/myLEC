import React from 'react';

class Header extends React.Component{
render(){
    return(
        <div className='Header'>
            <p className='header-navigation'>Home</p>
            <p className='header-navigation'>Standings</p>
            <p className='header-navigation'>Schedule</p>
        </div>
    )
}
}

export default Header