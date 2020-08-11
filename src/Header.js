import React from 'react';
import {NavLink} from 'react-router-dom'

class Header extends React.Component{
render(){
    return(
        <div className='Header'>
            <NavLink to='/' >
            <p className='title' >LEC</p>
            </NavLink>
            <nav>
                <NavLink to='/' exact className='nav-link'  activeClassName='active-tab'>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/Schedule' exact className='nav-link' activeClassName='active-tab'>
                <p>Schedule</p>
                </NavLink>
                <NavLink to='/Standings' exact className='nav-link' activeClassName='active-tab'>
                <p>Standings</p>
                </NavLink>
            </nav>
        </div>
    )
}
}

export default Header