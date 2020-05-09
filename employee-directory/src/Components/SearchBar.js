import React from "react";
import 'mdbreact/dist/css/mdb.css';
import { MDBCol } from "mdbreact";

const SearchBar = () => {
    return (
      <MDBCol md="6">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      </MDBCol>
    );
  }
  
  export default SearchBar;
