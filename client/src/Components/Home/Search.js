import React, { Component } from "react";
import { stat } from "fs";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ value: event.target.value });

  }

  handleSubmit(event){
    event.preventDefault();
    this.props.searchItem(this.state.value);
    this.setState = ({value: "" });
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="searchContainer">
          <input
            className="searchBar"
            type="text"
            value={this.state.value}
            placeholder="Search Twitter"
            onChange={this.handleChange}
          />
          <input id="searchBtn" type="submit" value="Search" />
        </div>
      </form>
    );
  }
}

export default Search;
