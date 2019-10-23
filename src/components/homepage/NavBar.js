import React,{Component} from 'react';
import logo from '../../Assets/logo.png';
import searchImg from '../../Assets/searchImg.png';
import home from '../../Assets/house-black-silhouette-without-door.png';
import gift from '../../Assets/gift-box.png';
import bell from '../../Assets/bell.png';
import icon from '../../Assets/matthew-kane-365718.png';




class NavBar extends Component {
    state = {
        update: false
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data) state.update = true
        else state.update = false
        return state
    }

    render(){
        return(
            <div className={`${this.state.update ? 'nav filter_blur' : 'nav'}`}>
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li className="search">
                        <img className="searchImg" src={searchImg} alt="" />
                        <input className="reviews" placeholder="Search Products And Reviews"></input>
                    </li>
                    <li style={{marginLeft:'150px'}}>
                        <img className="home" src={home} alt=""/>
                        <span style={{color: 'red', paddingLeft: '5px'}}>My Feed</span>
                    </li>
                    <li>
                        <img className="gift" src={gift} alt=""/>  
                        <span style={{color: 'black', paddingLeft: '5px'}}>Rewards</span>
                    </li>
                    <li>
                        <img className="bell" src={bell} alt=""/>     
                    </li>
                    <li>
                        <img className="icon" src={icon} alt=""/>        
                    </li>
                    <li >
                        <button className="rectangle">Post Review</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;