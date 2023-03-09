import React from 'react'
import { useState } from 'react'
import Header from './Header';
import MathData from './MathData'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Math() {
 const [MathDatas,setMathdata]=useState(MathData);
  return (
   <>
   
    <div className='math_portion'>
     <div className="math_img">
      <img  style={{position:"relative" , left:50, top:100}}  src="./Images/welcome_image.png" alt="" />
      <img style={{position:"relative" , left:300, top:100}} src="./Images/cm.png" alt="" />
      <a href="/math-games" className='math_link' data-drupal-link-system-path="math-games">Math Games</a>
          
      <a href="/quizzes" title="" className='math_link' data-drupal-link-system-path="node/129">Quizzes</a>
            
            <a href="/manipulatives" className='math_link' data-drupal-link-system-path="manipulatives">Manipulatives</a>
                
            <a href="/brain-teasers" className='math_link' data-drupal-link-system-path="brain-teasers">Brain Teasers</a>
                  
            <a href="/more" className='math_link' data-drupal-link-system-path="more">More</a>
    
   
            
    </div>
<div className="main_parentdiv">
  <div className="container mt-5">
  <div className='row d-flex justify-content-center align-items-center mt-5 '>

    
      {
       MathDatas.map((element,id)=>{
        return(
         <>
           <Card style={{ width: '21rem' , border:"none" , margin:20 }}>
        <Card.Img variant="top" src={element.game_img} style={{height:"16rem", margin:"0"}} />
        <Card.Body>
          <Card.Title>{element.game_name}</Card.Title>
          <Card.Text style={{color:"#2C366B"}}>
             make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" style={{backgroundColor:"#2C366B", color:"white"}} className='col-lg-12' >Play</Button>
        </Card.Body>
      </Card>
         </>

        )
      

       })
      }
      
   
     </div>
     </div>
     </div>
     


      
    </div>
    
    </>
  )
}
