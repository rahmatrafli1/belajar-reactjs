import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class Header extends React.Component {
  constructor() {
    super();
    // membuat object state
    this.state = {
      title: "React JS",
      subTitle: "Belajar React JS",
    };
  }

  changeTitle = () => {
    this.setState({
      title: "New Title",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subTitle}</h2>
        <button onClick={this.changeTitle}>Ubah Judul</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
