/** @format */

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ListUSer = () => {
  const [users, setUsers] = useState([]);

  async function UserList() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await response.json());
  }

  useEffect(() => {
    UserList();
  }, []);

  return (
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
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListUSer;
