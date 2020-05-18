import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modules: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://api.nusmods.com/v2/2019-2020/moduleList.json")
      .then((res) => res.json())
      .then((modules) => this.setState({ modules }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { modules, searchField } = this.state;
    const filteredModules = modules.filter(
      (mod) =>
        mod.title.toLowerCase().includes(searchField.toLowerCase()) ||
        mod.moduleCode.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>NUSMods Doppelganger</h1>
        <SearchBox
          placeholder="Type any module here"
          changeHandler={this.handleChange}
        ></SearchBox>
        <CardList modules={filteredModules}></CardList>
      </div>
    );
  }
}

export default App;
