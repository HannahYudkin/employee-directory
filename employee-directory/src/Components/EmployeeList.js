import React from "react";
//import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function EmployeeTable(props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
          {
              props.data.map(row => (
                  <tr>
                      <td>{row.First_Name}</td>
                      <td>{row.Last_Name}</td>
                      <td>{row.Phone_number}</td>
                      <td>{row.Email}</td>
                      <td>{row.Company_Name}</td>
                  </tr>
              ))
          }
          </tbody>
    </Table>
  );
}
export default EmployeeTable;
