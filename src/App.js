import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { marks } from './initial.js';

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
    <div className="Padding PreviewArea" id="preview">
      <ReactMarkdown children={props.markdown} />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: "",
    }

    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    this.setState({ markdown: marks })
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value, })
  }

  render() {

    return (
      <div className="App">
        <TextArea
          content={this.state.markdown}
          callback={this.handleChange}
        />
        <Converter />
        <PreviewArea markdown={this.state.markdown} />
      </div>
    );
  };
}

export default App;
