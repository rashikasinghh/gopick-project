import React,{Component} from 'react';
import thumb from '../../Assets/thumb.png';
import car from '../../Assets/car.jpeg'

class MainContent extends Component {
    state = {
        update: false
    }

    componentDidMount() {
        if (this.props.data === true)
        this.setState({update:true})
    }

    render(){
        return(
            <div className={`${this.state.update ? 'main filter_blur':'main'}`}>
                <div className="srivatsa-s-reviews">Srivasta's Review</div>
                <div className="save_drafts">Saved Drafts</div>
                <p className="review_border"></p>
                <div className="main_card">
                    <div className="content">
                        <img src={thumb} alt="" width='20px' style={{ display:'inline',verticalAlign:'middle'}}/>
                        <p className="main_heading">It's all about the amazing screen and battery</p>
                        <p className="the_verge">The Verge</p>
                        <p className="main_reviews">12k reviews</p>
                        <p className="oneplus">With the OnePlus 3T, we got virtually the same body as the OnePlus 3, but packed with a new processor, more RAM, and a bigger battery. yet, and the 6-8 GB of RAM offered in the OnePlus 5 was already the highest the industry had ever seen. <a href="*">(readmore)</a></p>
                        <img src={car} alt="" style={{height: '422px',width: '560px'}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContent;