import React from 'react';
import {NavLink} from 'react-router-dom'
import $ from 'jquery'

class Header extends React.Component{
    componentDidMount(){
        $('.burger').click(()=>{
            $('.nav-container').toggle()
        })
        $('p').click(()=>{
            if($(window).width()<=1000)
            $('.nav-container').hide()
        })
    }
render(){

    return(
        <div className='Header'>
            <NavLink to='/' >
            <p className='title' >LEC</p>
            </NavLink>
            <nav>
                <div className='nav-container'>
                <NavLink to='/' exact className='nav-link'  activeClassName='active-tab'>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/Schedule' exact className='nav-link' activeClassName='active-tab'>
                <p>Schedule</p>
                </NavLink>
                <NavLink to='/Standings' exact className='nav-link' activeClassName='active-tab'>
                <p>Standings</p>
                </NavLink>
                </div>
                <div className='burger'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </nav>
        </div>
    )
}
}

export default Header