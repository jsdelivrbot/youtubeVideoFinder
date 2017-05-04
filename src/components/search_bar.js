// Same as const Component = React.Component (ES6)
import React, { Component } from 'react';

// Define a new class called searchbar and give it all
  // functionality that a React.Component has (ES6)
class SearchBar extends Component {
  // first and only function called automatically whenever a new instance of the class is created
  constructor(props) {
    super(props);

    // Update state of term as input changes, only change state like this at first in a constructor func
    this.state = { term: ''};
  }



  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value) } /> {/* Update state - ES6 syntax, see Handle User Events Episode*/}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;

// State is a plain JS object that is used to record, and react to events
// Each class based component has its own state object
// Whenever a components state is changed, it and it's children automatically re-render

// Only the parent component should feth info such as a API
