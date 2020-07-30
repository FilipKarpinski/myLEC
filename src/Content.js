import React from 'react';
import logo from './img/lec-logo.png';
import studio1 from './img/studio1.jpeg';
import studio3 from './img/studio3.jpg';
import studio2 from './img/studio2.jpg';
import studio4 from './img/studio4.jpg';
import studio5 from './img/studio5.jpg';

class Content extends React.Component{
    state={
        image:0,
        images:[studio1,studio2,studio3,studio4,studio5]
    }
    changeImg=()=>{
        if(this.state.image<this.state.images.length-1)
        this.setState(prevstate=>{
            return{
                image:prevstate.image++
            }
        })
        else
        this.setState({
            image:0
        })
    }

    componentDidMount(){
        this.interval=setInterval(this.changeImg,3000)
    }

    componentWillMount(){
        clearInterval(this.interval)
    }

render(){
    return(
        <div className='content'>
            <div className='logos'>
            <img src={logo} alt="LEC" className='logo-img'/>
            <img src={this.state.images[this.state.image]} alt="studio" className='studio-img'/>
            </div>
        </div>
    )
}
}

export default Content