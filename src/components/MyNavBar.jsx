import { BiMoneyWithdraw } from "react-icons/bi"; 
import { GiFullPizza } from "react-icons/gi";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { MyContext } from "../context/MyContext";

const activeLinkValidator = ({ isActive }) =>
  isActive ? "active" : "unactive";

const MyNavBar = () => {
  const {
    totalDePizzas,
    totalDinero,
    setTotalDinero,
  } = useContext(MyContext);


    let reduce = totalDePizzas.reduce((acumulador, actual) => acumulador + actual.price, 0);
    console.log("reduce",reduce)
    setTotalDinero(reduce)
 

  return (
    <div>
      <Navbar style={{ backgroundColor: "#b21807" }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <GiFullPizza style={{ fontSize: "50px", color: "orange" }} />
          </Navbar.Brand>
          <Nav>
            {" "}
            <NavLink className={activeLinkValidator} to="/">
              Home
            </NavLink>
            <NavLink className={activeLinkValidator} style={{marginLeft:"15%"}}to="/carrito">
              Carrito
            </NavLink>
          </Nav>
          <Nav>
            {" "}
            <NavLink className={activeLinkValidator} to="/carrito">
              <BiMoneyWithdraw  style={{ fontSize: "35px", color: "orange" }}/><span style={{textDecoration:"none",color: "orange"}}>${totalDinero}</span>
              
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
