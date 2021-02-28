import React from "react";
import {FaBars} from "react-icons/fa";

import {Navbar, Form, Button} from "react-bootstrap";

import "./SideDrawer.css";


const Header = (props) => {


  return (
      <div>
        <Navbar className="bg-light justify-content-between">
          <Button onClick={props.showSidebar}>
            <FaBars />
          </Button>
          <Form inline className="bg-light justify-content">

            <Button type="submit">Submit</Button>
          </Form>
        </Navbar>
      </div>

  );
};

export default Header;
