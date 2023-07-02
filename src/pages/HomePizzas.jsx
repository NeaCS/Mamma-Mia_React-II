import React, { useContext } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { MyContext } from "../context/MyContext";
import Carrusel from "../components/Carrusel";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HomePizzas = () => {
  const navigate = useNavigate();

  const {
    pizzas,
    setpizzaSeleccionada,
    totalDePizzas,
    setTotalDePizzas,
    setTotalDinero,
  } = useContext(MyContext);

  const verDetalles = (detalles) => {
    setpizzaSeleccionada(detalles);
    navigate(`/${detalles.id}`);
  };
  const addtoCart = (e, lapizza) => {
    setTotalDePizzas([...totalDePizzas, lapizza]);
    console.log("total de pizzas", totalDePizzas.length);

    let reduce = totalDePizzas.reduce(
      (acumulador, actual) => acumulador + actual.price,
      0
    );
    console.log("reduce", reduce);
    setTotalDinero(reduce);

    toast.success("Pizza agregada", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <div>
      <Carrusel />
      <h1 className="tituloPizza">Nuestras Pizzas</h1>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "1%",
          paddingBottom: "3%",
        }}
      >
        {pizzas.map((item, index) => {
          return (
            <Card
              style={{
                width: "15%",
                height: "auto",
                marginTop: "2%",
                paddingBottom: "2%",
              }}
            >
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name.toUpperCase()}</Card.Title>
                <Card.Text>
                  <ListGroup>
                    {item.ingredients.map((ingrediente, index) => {
                      return <ListGroup.Item>{ingrediente}</ListGroup.Item>;
                    })}
                  </ListGroup>
                  
                </Card.Text>
                <div> <b>Precio: ${item.price}</b>{" "}</div>
               
              </Card.Body>
              <div>
                <Button variant="warning" onClick={(e) => verDetalles(item)}>
                  Ver más{" "}
                </Button>{" "}
              </div>
              <Button
                className={"mt-3"}
                variant="success"
                onClick={(e) => addtoCart(e, item)}
              >
                Agregar
              </Button>{" "}
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default HomePizzas;
