import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowTable from "./showTable";

const FetchAPIdata = () => {
  //   useEffect(async () => {
  //     const result = await axios("https://jsonplaceholder.typicode.com/users");

  //     setUsers(result.data);
  //   });

  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setUsers(data);
      })
      .then();
  }, []);

  return <div>{users && <ShowTable users={users} />}</div>;
};

export default FetchAPIdata;
