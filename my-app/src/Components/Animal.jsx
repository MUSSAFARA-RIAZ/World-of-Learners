import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import {ADD} from '../redux/action/action';
import { useDispatch } from 'react-redux';

import Slider from './Slider';

//import { NavLink } from 'react-router-dom';
import AnimalData from './AnimalData';
export default function Cards() {
 const [data,setData]=useState(AnimalData);
 const dispatch=useDispatch();
 const send=(e)=>{
  dispatch(ADD(e));



 }
 let audio = new Audio("./Image/Jingle-Bells-3.mp3")

  const start = () => {
    audio.play()
  }
  const images=['./Images/WOLimg1.jpg','./Images/WOLimg2.jpg']


  return (
    <>
     <Slider />
    <div className="animal_div" onClick={start}>
  {
    data.map((element, id) => {
      return (
        <div className="animal_card" key={id}>
          <div className="animal_details" style={{ backgroundColor: element.color }}>
            <div className="animal_img" onClick={() => send(element)}>
              
                <img src={element.animal_img} alt="" />
             
            </div>
            <div className="animal_desc">
              <h3>{element.animal_name}</h3>
              <p>{element.description}</p>
            </div>
          </div>
        </div>
      )
    })
  }
</div>

  </>
  )
}
