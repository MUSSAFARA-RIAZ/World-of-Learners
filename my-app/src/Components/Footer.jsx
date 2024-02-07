import React from 'react';
import '../App.css';


export default function Footer() {
  return (
    <div>
     <div className="main"> </div>
		<footer className="footer-distributed">
 
			<div className="footer-left">
 
				<h3>WorldOf<span>Learners</span></h3>
 
				<p className="footer-links">
					<a href="#">Cool Maths</a>
					·
					<a href="#">Animals</a>
					·
				</p>
 
				<p className="footer-company-name">WorldOfLearners &copy; 2022</p>
			</div>
 
			<div className="footer-center">
 
				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>NED University</span> Karachi, Pakistan</p>
				</div>
 
				<div>
					<i className="fa fa-phone"></i>
					<p>+92 334 121582</p>
				</div>
 
				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">contact@WorldOfLearners.com</a></p>
				</div>
 
			</div>
 
			<div className="footer-right">
 
				<p className="footer-company-about">
					<span className='about_application'>About application</span>
					Web of Learners is an application for kids to learns about differet animals &amp; polish the mental math skills through interactive quizzes.
				</p>
 
				<div className="footer-icons">
 
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>
 
				</div>
 
			</div>
 
		</footer>
 
      
    </div>
  )
}
