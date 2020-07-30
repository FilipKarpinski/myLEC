import React from 'react';

class Header extends React.Component{
render(){
    return(
        <div className='Header'>
            <p className='title'>LEC</p>
            <nav>
                <a href="" className='nav-link'>Home</a>
                <a href="" className='nav-link'>Schedule</a>
                <a href="" className='nav-link'>Standings</a>

            </nav>
        </div>
    )
}
}

export default Header