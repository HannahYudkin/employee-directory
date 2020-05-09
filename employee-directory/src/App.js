import React from "react";
//import Data from "./Components/Data"
import EmployeeTable from "./Components/EmployeeList";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./Components/SearchBar";
import data from "./Components/Data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
    this.sortBy = this.sortBy.bind(this)
  }
  sortBy(key) {
    this.setState({
      
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <EmployeeTable data={this.state.data} />;
      </div>
    );
  }
}

export default App;
