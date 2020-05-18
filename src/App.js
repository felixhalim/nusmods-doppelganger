import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modules: [],
    };
  }

  componentDidMount() {
    fetch("https://api.nusmods.com/v2/2019-2020/moduleList.json")
      .then((res) => res.json())
      .then((modules) => this.setState({ modules }));
  }

  render() {
    return (
      <div className="App">
        <h1>NUSMods Doppelganger</h1>
        <CardList modules={this.state.modules}></CardList>
      </div>
    );
  }
}

export default App;
