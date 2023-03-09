import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100" style={{height:"70vh"}}
          src="./Images/sliderimg2.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"black", fontSize:50}}>
            Welcome to world of learners</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"  style={{height:"70vh"}}
          src="./Images/sliderimg.jpeg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"  style={{height:"70vh"}}
          src="./Images/sliderimg3.jpeg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;