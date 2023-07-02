import React, { useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PizzaDetalle = () => {
  const { pizzaSeleccionada, totalDePizzas, setTotalDePizzas} =
    useContext(MyContext);
  const navigate = useNavigate()
  const agregarCart = () => {
     setTotalDePizzas([...totalDePizzas, pizzaSeleccionada]) 
     toast.success("Pizza agregada", {
      position: toast.POSITION.BOTTOM_RIGHT
    })

     
  }
  return (
    <div style={{ height: "100vh" }}>
      <div className="d-flex justify-content-center mt-5">
        <Card style={{ width: "65%" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <Card.Img
                src={pizzaSeleccionada.img}
                alt={pizzaSeleccionada.name}
              />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>{pizzaSeleccionada.name.toUpperCase()}</Card.Title>
                <Card.Text>
                  {pizzaSeleccionada.desc} <br />
                  <b>Precio: ${pizzaSeleccionada.price}</b>{" "}
                </Card.Text>
                <Container>
                  <div className="d-flex justify-content-between">
                    <Button style={{backgroundColor: '#1f4215'}} onClick={(e)=> navigate("/")}>Volver</Button>
                    <Button style={{backgroundColor: '#B21807'}} onClick={agregarCart}>Agregar al carrito</Button>
                  </div>
                </Container>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PizzaDetalle;
