import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { useSelector } from 'react-redux';

function Header() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio("./Images/Jingle-Bells-3.mp3");

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="navbar">
      <Navbar variant="dark" expand="md">
        <Container>
          <NavLink style={{ textDecoration: "none", color: "#b0ff11", fontFamily: "Cookie", fontSize: "35px", fontWeight: "bold" }} to="/">WOL</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <NavLink style={{ textDecoration: "none", color: "white", padding: "20px" }} to="/game">Game</NavLink> */}
              <NavLink style={{ textDecoration: "none", color: "white", padding: "20px" }} to="/">Animals</NavLink>
              <NavLink style={{ textDecoration: "none", color: "white", padding: "20px" }} to="/coolmath">Cool_Maths</NavLink>
              <NavLink to='/alphabets' style={{ textDecoration: "none", color: "white", padding: "20px" }}>Alphabet</NavLink>
              <NavLink to='/animalquiz' style={{ textDecoration: "none", color: "white", padding: "20px" }}>Animal Quiz</NavLink>
              <NavLink to='/alphabetquiz' style={{ textDecoration: "none", color: "white", padding: "20px" }}>Alphabet Quiz</NavLink>
              <NavLink to='/mathsquiz' style={{ textDecoration: "none", color: "white", padding: "20px" }}>Maths Quiz</NavLink>
              {/* <NavLink to='/quiz' style={{textDecoration:"none" ,color:"white", padding:"20px" }}>Quiz</NavLink> */}
            </Nav>
            <Nav className="ml-auto">
              <i style={{ color: "white", padding: "20px" , fontSize:"20px" }} className={`fa-solid fa-${isPlaying ? 'volume-up' : 'volume-off'}`} onClick={toggleAudio}></i>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
