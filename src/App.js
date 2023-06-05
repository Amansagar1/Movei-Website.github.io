 
// export default App;
import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import Cards from "./components/Cards";
import "./App.css";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      loader: true
    };
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war/")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ apiData: json, loader: false });
      });
  }

  render() {
    // let {loader, apiData} = this.state
    let { apiData } = this.state;
    let { loader } = this.state;
    if (!loader) {
      console.log(apiData.Search);
    }
    return (
      <div className="wrapper">
        <Searchbar />
        <div className="cards-wrapper">
          {loader ? (
            <h2 style={{ color: "white" }}>Loading...</h2>
          ) : (
            apiData.Search?.map((item) => (
              <Cards Poster={item.Poster} Title={item.Title} />
            ))
          )}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
