import React from 'react';
import './App.css';
import ImageList from './ImageList.js';
import Header from './Header.js';
import Footer from './Footer.js';
import images from './Data.js';
import DropDown from './DropDown.js';

export default class App extends React.Component{
  state = {
    filter: ''
  }

  handleChange = e => {
    this.setState({
        filter: e.target.value
    });
  } 
    render() {
      return (
        <div className="App">
          <Header />
          <DropDown 
            dropdown={this.handleChange}
          />
          <ImageList 
            images={images} 
            filter={this.state.filter} 
            horns={this.state.horns} 
            keyword={this.state.keyword} 
            real={this.state.real}  
          />
          <Footer />
        </div>
      );
    }
}
