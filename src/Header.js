import React from 'react';
import {NavLink} from 'react-router-dom'
import $ from 'jquery'

class Header extends React.Component{
    componentDidMount(){
        $('.burger').click(()=>{
            $('.links-container').toggle()
        })
        $('.nav-link').click(()=>{
            if($(window).width()<=1000)
            $('.links-container').hide()
        })
        $(window).resize(()=>{
            if($(window).width()>1000){
            $('.links-container').show()
            $('.links-container').css('display','flex')
            }
            else
            $('.links-container').hide()
        })
    }
render(){

    return(
        <div className='Header'>
            <NavLink to='/'  className='title' >
            <p>LEC</p>
            </NavLink>
            <nav>
                <div className='links-container'>
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
            </nav>
            <div className='burger' id='burger'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
        </div>
    )
}
}

export default Header