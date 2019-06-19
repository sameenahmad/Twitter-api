import React, { Component } from "react";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("Search Value is:", this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='searchContainer'>
        <input
          className="searchBar"
          type="text"
          value={this.state.value}
          placeholder="Search Twitter"
          onChange={this.handleChange}
        />
        <input className="searchBtn" type="submit" value="Search" onClick={this.onSubmit} />
      </div>
    );
  }
}

export default Search;
