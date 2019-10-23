import React,{Component} from 'react';
import thumb from '../../Assets/thumb.png';
import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.jpg';
import image4 from '../../Assets/image4.jpg';
import image5 from '../../Assets/image5.jpg';

const jsonImage = {
    Review1 : {
        summary : 'It\'s all about the amazing screen and battery',
        description : `With the OnePlus 3T, we got virtually the same body as the OnePlus 3, but packed with a new processor, more RAM, and a bigger battery. yet, and the 6-8 GB of RAM offered in the OnePlus 5 was already the highest the industry had ever seen. <a href="*">(readmore)</a>`,
        image: image1
    },
    Review2 : {
        summary : 'Great',
        description: `With the OnePlus 3T, we got virtually the same body as the OnePlus 3, but packed with a new processor, more RAM, and a bigger battery. yet, and the 6-8 GB of RAM offered in the OnePlus 5 was already the highest the industry had ever seen. <a href="*">(readmore)</a>`,
        image: image2
    },
    Review3 : {
        summary : 'Amazing',
        description: `With the OnePlus 3T, we got virtually the same body as the OnePlus 3, but packed with a new processor, more RAM, and a bigger battery. yet, and the 6-8 GB of RAM offered in the OnePlus 5 was already the highest the industry had ever seen. <a href="*">(readmore)</a>`,
        image: image3
    },
    Review4 : {
        summary : 'Nice stuff from OnePlus',
        description: `With the OnePlus 3T, we got virtually the same body as the OnePlus 3, but packed with a new processor, more RAM, and a bigger battery. yet, and the 6-8 GB of RAM offered in the OnePlus 5 was already the highest the industry had ever seen. <a href="*">(readmore)</a>`,
        image: image4
    },
    Review5 : {
        summary : 'New 7T has it all',
        description: `With the OnePlus 3T, we got virtually the same body as the OnePlus 3, but packed with a new processor, more RAM, and a bigger battery. yet, and the 6-8 GB of RAM offered in the OnePlus 5 was already the highest the industry had ever seen. <a href="*">(readmore)</a>`,
        image: image5
    }
}
class MainContent extends Component {
    state = {
        update: false,
        imageArray: []
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data) state.update = true
        else state.update = false
        return state
    }

    render(){
        return(
            <div className={`${this.state.update ? 'main filter_blur':'main'}`}>
                <div className="srivatsa-s-reviews">Srivasta's Review</div>
                <div className="save_drafts">Saved Drafts</div>
                <p className="review_border"></p>
                {Object.keys(jsonImage).map((key,index) => (
                    <div key={index}>    
                        <div className="main_card">
                            <div className="content">
                                <img src={thumb} alt="" width='20px' style={{ display:'inline',verticalAlign:'middle'}}/>
                                <p className="main_heading">{jsonImage[key].summary}</p>
                                <p className="the_verge">The Verge</p>
                                <p className="main_reviews">12k reviews</p>
                                <p className="oneplus" dangerouslySetInnerHTML={{__html:jsonImage[key].description}}></p>
                                <img src={jsonImage[key].image} alt="" style={{height: '422px',width: '560px'}}/>
                            </div>
                        </div>
                    </div>
                    )
                )}
            </div>
        )
    }
}

export default MainContent;