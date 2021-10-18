// import React from "react";
import { NavDropdown, Nav, Button, FormControl, Form } from "react-bootstrap";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const Navbar = () => {
  return (
    <ProSidebar>
      <Menu iconShape='square'>
        <MenuItem>Dashboard</MenuItem>
        <SubMenu title='Components'>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
      <Menu iconShape='square'>
        <MenuItem>Dashboard</MenuItem>
        <SubMenu title='Components'>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>{" "}
      <Menu iconShape='square'>
        <MenuItem>Dashboard</MenuItem>
        <SubMenu title='Components'>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>{" "}
      <Menu iconShape='square'>
        <MenuItem>Dashboard</MenuItem>
        <SubMenu title='Components'>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Navbar;
