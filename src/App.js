import React,{Component} from 'react';
import './App.css';
import NavBar from './components/homepage/NavBar';
import SideBar from './components/homepage/SideBar';
import MainContent from './components/homepage/MainContent';
import Reviews from './components/homepage/Reviews';
import background from './Assets/525336436.png';
import ImageUpload from './Assets/image-upload.jpg';
import { css } from '@emotion/core';
import { BounceLoader } from 'react-spinners';

const override = css`
    position: absolute;
    top: 30%;
    left: 42%;
    display: block;
    margin: 0 auto;
    border-color: red;
    z-index:99999999;
`;

class App extends Component{
  state = {
    update : false,
    loading: true
  }

  componentDidMount (){
    this.spinner();
  }

  updateHandler = (type) => {
    console.log(type)
    this.setState({loading: true, update : type}, () => this.spinner())
  }

  spinner = () => {
    setTimeout(() => {
      this.setState(prevState => ({loading: !prevState.loading}))
    }, 2000)
  }

  render(){
    return(
      <div className='sweet-loading'>
        <BounceLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#36D7B7'}
          loading={this.state.loading}
        /> 
        {this.state.loading ? ' ' :
        <div>
          <NavBar data={this.state.update}/>
          <img src={this.state.update ? ImageUpload : background} alt=""/>
          <SideBar update={(type) => this.updateHandler(type)} data={this.state.update}/>
          <MainContent data={this.state.update}/>
          <Reviews data={this.state.update}/> 
          </div>
        }
      </div>
    )
  }
}

export default App;