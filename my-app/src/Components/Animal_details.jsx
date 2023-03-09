import React from 'react'
import { useState} from 'react';

import { useParams} from 'react-router-dom';

import {AnimalReducer} from '../redux/reducer/reducers';
import {useSelector} from 'react-redux';

export default function Animal_details() {
 const [data,setData]=useState([]);
 const {id}=useParams();
 console.log(id);
 const getdata=useSelector((state)=>state.Animals);
 console.log(getdata);


  return (
    <div>
    {

      getdata.length===0 ? "mussfara":(
        <div className='animal_details_one'>
    
        {
            getdata.map((element,id)=>{
             return(
             <>
            <div className='detail-animal-style'>
             <div className="subimg">
              <img className='animal_big_img'  src={element.animal_img}/>
             </div>
             <div className="animal_all_details">
              <h1 >{element.animal_name}</h1>
              <p style={{color:element.color}}>{element.paragraph}</p>
              <p><strong>{element.lifespan}</strong></p>
              <p><strong>{element.speed}</strong></p>
             </div>
             </div>
           
             </>
             )
            })
           } 
           </div>

      )

    }
   
      
   </div>
  )
}
