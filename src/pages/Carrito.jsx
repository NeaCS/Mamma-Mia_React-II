import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const navigate = useNavigate()
  const {
    totalDePizzas,
    totalDinero,
    setTotalDinero,
  } = useContext(MyContext);

  useEffect(() => {
  let reduce = totalDePizzas.reduce((acumulador, actual) => acumulador + actual.price, 0);
console.log("reduce",reduce)
setTotalDinero(reduce)

  }, [totalDePizzas])

  


  return (
    <Container style={{ maxWidth: "500px", height:"100vh" }}>
      <Row>
        <Col>
          <h1 style={{ fontSize: "20px" }}>Boleta de Compra</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table
            striped
            bordered
            size="sm"
            style={{ fontSize: "14px", maxWidth: "100%" }}
          >
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {totalDePizzas &&
                totalDePizzas.map((value, index) => {
                  return (
                    <tr>
                      <td>{value.name}</td>
                      <td>${value.price}</td>
                    </tr>
                  );
                })}{" "}
              <tr>
                <td><b>TOTAL</b></td>
                <td><b>${totalDinero}</b></td>
                
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <div><Button style={{backgroundColor: '#1f4215'}} onClick={(e)=> navigate("/")}>Volver</Button></div>
    </Container>
  );
};

export default Carrito;
