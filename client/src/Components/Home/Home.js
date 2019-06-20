import React, { Component } from "react";
import Search from "./Search";
import "./Homestyle.css";
import Tweetsitem from "./Tweetsitem";
class Home extends Component {
  state = {
      tweets:[]
  };

searchItem=value=>{
 this.setState({tweets: value})

}
  
  render() {
    return (
      <div className="home">
        <Search searchItem={this.searchItem} />
        <Tweetsitem tweet={this.state.tweets}/>
      </div>
    );
  }
}

export default Home;
