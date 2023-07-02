import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carrusel = () => {
  return (
    <Carousel style={{marginBottom: "2%"}}>
        <Carousel.Item style={{ height: '20rem' }}>
          <img
            className="d-block object-fit-cover"
            src="https://images5.alphacoders.com/399/399563.jpg"
            alt="Pizza 1"
            style={{objectFit: "cover", objectPosition: "center", height: "500px", width: "100%"}}
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '20rem' }}>
          <img
            className="d-block"
            src="https://images6.alphacoders.com/130/1308388.jpeg"
            alt="Pizza 2"
            style={{objectFit: "cover", objectPosition: "center", height: "500px", width: "100%"}}
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '20rem' }} >
          <img
            className="d-block"
            src="https://images3.alphacoders.com/130/1308376.jpeg"
            alt="Pizza 3"
            style={{objectFit: "cover", objectPosition: "center", height: "500px", width: "100%"}}
          />
        </Carousel.Item>
      </Carousel>
  )
}

export default Carrusel