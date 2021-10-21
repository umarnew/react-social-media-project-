import React, { Component } from "react";
import SidebarElement from "./sidebarElement";

const header1 = "Home";
const listItems1 = ["Overview", "product"];

const header2 = "Dashboard";
const listItems2 = ["Overview", "Weekly", "Monthly", "Annually"];

const header3 = "Orders";
const listItems3 = ["Overview", "Weekly", "Monthly", "Annually"];

const SideBar = () => {
  return (
    <div className='' style={{ textAlign: "left" }}>
      <ul className='list-unstyled ps-0'>
        <SidebarElement listHeader={header1} listItems={listItems1} />
        <SidebarElement listHeader={header2} listItems={listItems2} />
        <SidebarElement listHeader={header3} listItems={listItems3} />
      </ul>
    </div>
  );
};

export default SideBar;
