import React, { Component } from "react";
import FetchAPIdata from "./fetchAPIdata";
import { Table } from "react-bootstrap";
import ModalButton from "../modal/modalButton";

const ShowTable = ({ users }) => {
  console.log(users);
  return (
    <>
      {/* <FetchAPIdata />
      <div style={{ float: "right" }} class='col-md-10'>
        <div class='container_border'>
          <table class='table'>
            <thead id='table1'>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Name</th>
                <th scope='col'>UserName</th>
                <th scope='col'>Email</th>
                <th scope='col'>Phone</th>
                <th scope='col'>Adress</th>
              </tr>
            </thead>
          </table>
        </div>
      </div> */}

      <div>
        <Table striped bordered hover>
          <thead></thead>
          <tbody>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>

            {users.map((e) => {
              return (
                <>
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    {/* <td>
                      <ModalButton />
                    </td> */}
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ShowTable;
