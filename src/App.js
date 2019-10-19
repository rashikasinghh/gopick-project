import React,{Component} from 'react';
import './App.css';
import NavBar from './components/homepage/NavBar';
import SideBar from './components/homepage/SideBar';
import MainContent from './components/homepage/MainContent';
import Reviews from './components/homepage/Reviews';
import background from './Assets/525336436.png';


class App extends Component{
  render(){
    return(
      <div>
        <NavBar/>
        <img src={background} alt=""/>
        <SideBar/>
        <MainContent/>
        <Reviews/> 
      </div>
    )
  }
}

export default App;