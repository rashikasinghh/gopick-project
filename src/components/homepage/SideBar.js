import React,{Component} from 'react';
import profileImage from '../../Assets/matthew-kane-365718-profile.png';
import linkImage from '../../Assets/chain-links.png';
import {Link} from 'react-router-dom';
import profileUpdate from '../../Assets/photo_update.png'

class SideBar extends Component {
    state = {
        update: false
    }

    componentDidMount() {
        if (this.props.data === true)
        this.setState({update:true})
    }

    render(){
        return(
            <div className='sidebar_card'>
                {this.state.update ? 
                    <div className="sidebar_profile_img">
                        <img src={profileUpdate} alt="" width='200px'/>
                        <p className="change-profile-photo">Change Profile Photo</p>
                    </div>
                    :<div className="sidebar_profile_img">
                        <img src={profileImage} alt="" />
                    </div>
                }
                <div className="rectangle-24">
                    {this.state.update ? <input type="text" className="profile_name profile_name_edit" value='Srivatsa Mudumby'/> 
                    : <div className="profile_name">Srivatsa Mudumby</div>}
                    <span className={`${this.state.update ? 'link-edit':'profile_deg'}`}>@technophie</span>
                    {this.state.update ? '' :
                    <div>
                        <Link to="/update"><button className="edit_button edit-button-profile">Edit Profile</button></Link>
                    </div>
                    }
                    {this.state.update ?
                    <textarea type="text" className="description_input description" value="Early Adaptor. Visual Learner.
                        Entrepreneur. Design aficonado!
                        Favorite hash - #Viral"/>
                    : <p className="description">
                        Early Adaptor. Visual Learner.
                        Entrepreneur. Design aficonado!
                        Favorite hash - #Viral
                    </p>
                    }
                     {this.state.update ? 
                    '': <div>
                    <div>
                        <img src={linkImage} alt="" style={{verticalAlign:'middle'}}/>
                        <a className="link" href="http://technophie.com">technophie.com</a>
                    </div>
                    
                    <div style={{margin: '15px 0 10px 0' }}>
                        <p className="stat">STATS</p>
                        <p className="line"></p>
                    </div>

                    <div className="statistic">
                        <div class="text">
                            <p className="number">567</p>
                            <span className="views">Reviews</span>
                        </div>
                        <div class="text">
                            <p className="number">1.2M</p>
                            <span className="views">Views</span>
                        </div>
                        <div class="text">
                            <p className="number">1.2K</p>
                            <span className="views">Upvotes</span>
                        </div>
                        </div>
                        <div className="statistic_line"></div>
                        <div className="statistic" style={{padding: '0 67px 0 40px', marginTop:'10px'}}>
                            <div class="text">
                                <p className="number">1.2M</p>
                                <span className="views">Followers</span>
                            </div>
                            <div class="text">
                                <p className="number">643</p>
                                <span className="views">Following</span>
                            </div>
                        </div>
                        </div>
                        }
                        {this.state.update ? 
                        <div>
                        <input type="text" className="input_edit_box input_description" value="Hyderabad"/>
                        <input type="text" className="input_edit_box input_description" value="Website"/>
                        <div style={{paddingLeft:'60px', marginTop:'13px'}}>
                            <Link to="/"><button className="update_button">Update</button></Link>
                        </div>
                        </div>
                        :''
                        }
                        
                </div>
            </div>
        )
    }
}

export default SideBar;