import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { useSelector } from 'react-redux';

function Header() { 
  let audio = new Audio("./Images/Jingle-Bells-3.mp3")

  const start = () => {
    audio.play();

   
   
    
  }
  const stop=()=>{
    audio.pause();
  }
  


  

 
  return (
    <>
    <div className="navbar">
    <Navbar  variant="dark">
        <Container>
          <NavLink style={{textDecoration:"none", color:"#b0ff11", fontFamily:"Cookie", fontSize:"35px",fontWeight:"bold"}} href="#home">WOL</NavLink>
          <Nav className="me-auto">
            <NavLink style={{textDecoration:"none" , color:"white" , padding:"20px"}} to="/">Animals</NavLink>
            <NavLink style={{textDecoration:"none" ,color:"white", padding:"20px" }} to="/coolmath">Cool_Maths</NavLink>
            <NavLink to='/alphabets' style={{textDecoration:"none" ,color:"white", padding:"20px" }}>Alphabet</NavLink>
            <NavLink to='/animalquiz' style={{textDecoration:"none" ,color:"white", padding:"20px" }}>Animal Quiz</NavLink>
            <NavLink to='/alphabetquiz' style={{textDecoration:"none" ,color:"white", padding:"20px" }}>Alphabet Quiz</NavLink>
            <NavLink to='/mathsquiz' style={{textDecoration:"none" ,color:"white", padding:"20px" }}>Maths Quiz</NavLink>
            {/* <NavLink to='/quiz' style={{textDecoration:"none" ,color:"white", padding:"20px" }}>Quiz</NavLink> */}
          </Nav>
        </Container>
        
      </Navbar>
  
        <i style={{color:"white", position:"relative" , left:-50}} class="fa-solid fa-music" onClick={start} onDoubleClick={stop}></i>
  

      </div>
     
     
    
    </>
  );
}

export default Header;