import React, { Component } from "react";
import FetchAPIdata from "./fetchAPIdata";
const ShowTable = ({ users }) => {
  console.log(users);
  return (
    <>
      <FetchAPIdata />
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
      </div>
    </>
  );
};

export default ShowTable;
