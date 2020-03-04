import React, { Component } from "react";

import "./index.css";
import "./AutoCompleteText.css";

export default class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ""
    };
  }

  onTextChanged = e => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionsSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={() => this.suggestionsSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div className="AutoCompleteText">
        <input value={text} onChange={this.onTextChanged} type="text" />
        {this.renderSuggestions()}
      </div>
    );
  }
}
