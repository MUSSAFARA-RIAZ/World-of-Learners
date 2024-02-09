import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100" style={{height:"60vh"}}
          src="./Images/WOLimg1.jpg"
         
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"  style={{height:"60vh"}}
          src="./Images/WOLimg2.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"  style={{height:"60vh"}}
          src="./Images/sliderimg3.jpeg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}



export default Slider;