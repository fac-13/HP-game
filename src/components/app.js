import React from "react";
import Form from "./form/form";
import "../../public/style.css";

export default class App extends React.Component {
  render() {
    return <div className="card">
      <h1>React game arcade!</h1>
      <Form />
    </div>;
  }
}
