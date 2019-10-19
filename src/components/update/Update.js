import React, {Component} from 'react';
import NavBar from '../homepage/NavBar';
import MainContent from '../homepage/MainContent';
import SideBar from '../homepage/SideBar';
import ImageUpload from '../../Assets/image-upload.jpg';


class Update extends Component {
    render () {
        return (
            <div>
                <NavBar data={true}/>
                <img src={ImageUpload} alt=""/>
                <p className="change-header-photo">Change Header Photo</p>
                <SideBar data={true}/>
                <MainContent data={true}/>
            </div>
        )
    }
}

export default Update;