import './App.css';
import React from 'react';

function TextArea(props) {
  return (
    <div className="Padding">
      <textarea
        className="TextBox"
        id="editor"
        value={props.content}
        onChange={props.callback}
      />
    </div>
  );
}

function Converter() {
  return (
    <div></div>
  )
}

function PreviewArea(props) {
  return (
    <div className="Padding" id="preview">
      <span className="PreviewArea">{props.content}</span>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markup: "Enter your markup here...",
    }

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({ markup: event.target.value })
  }

  render() {

    return (
      <div className="App">
        <TextArea
          content={this.state.markup}
          callback={this.handleChange}
        />
        <Converter />
        <PreviewArea content={this.state.markup} />
      </div>
    );
  };
}

export default App;
