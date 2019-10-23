import React,{Component} from 'react';
import review from '../../Assets/review.png';
import review1 from '../../Assets/review-1.png';


class Reviews extends Component {
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
            <div>
            {this.state.update ? '' :
            <div className="review_comp">
                <div className="top-reviewers">Top Reviewers</div>
                <p className="review_border"></p>
                <div className="review_card">
                    <div className="reviewers">
                        <div className="review_flex">
                            <img src={review} alt="" style={{verticalAlign:'bottom'}}/>
                            <div style={{display:'inline-block', marginLeft:'13px'}}>
                                <p className="follower_name">Mark Taylor</p>
                                <span className="follow_number">345 reviews</span>
                            </div>
                            <button className="follow_button">follow</button>
                        </div>
                        <div className="review_flex">
                            <img src={review1} alt="" style={{verticalAlign:'bottom'}}/>
                            <div style={{display:'inline-block', marginLeft:'13px'}}>
                                <p className="follower_name">Effie Harper</p>
                                <span className="follow_number">43 reviews</span>
                            </div>
                            <button className="follow_button">follow</button>
                        </div>
                        <div className="review_flex">
                            <img src={review} alt="" style={{verticalAlign:'bottom'}}/>
                            <div style={{display:'inline-block', marginLeft:'13px'}}>
                                <p className="follower_name">Zachary Hampton</p>
                                <span className="follow_number">452 reviews</span>
                            </div>
                            <button className="follow_button">follow</button>
                        </div>
                        <div className="review_flex">
                            <img src={review1} alt="" style={{verticalAlign:'bottom'}}/>
                            <div style={{display:'inline-block', marginLeft:'13px'}}>
                                <p className="follower_name">Randy Johnson</p>
                                <span className="follow_number">123 reviews</span>
                            </div>
                            <button className="follow_button">follow</button>
                        </div>
                        <div className="review_flex">
                            <img src={review} alt="" style={{verticalAlign:'bottom'}}/>
                            <div style={{display:'inline-block', marginLeft:'13px'}}>
                                <p className="follower_name">Jared Olson</p>
                                <span className="follow_number">123 reviews</span>
                            </div>
                            <button className="follow_button">follow</button>
                        </div>
                    </div>
                    <div className="copyright-card">
                        <div className="copyright-tab">
                        © 2018 Legoto  About  Help Center  Terms  Privacy policy  Cookies  Blog  Jobs  Businesses  Developers
                        </div>
                    </div>
                </div>
            </div>
            }
            </div>
        )
    }
}

export default Reviews;