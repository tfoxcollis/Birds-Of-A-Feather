import React from 'react'
import "./Footer.css";

const Footer = () => {
	return(
		<footer className="footer-container">
			<div className="top-footer">
				<h4 className="footer-header">Created by:</h4>
				<p className="group-names"> Trish Fox-Collis</p>
			</div>

			<div className="team-footer">
				<a className="creds" href="https://github.com/tfoxcollis">GitHub: tfoxcollis</a> 
				<a className="creds" href="https://www.linkedin.com/in/trish-fox-collis/">LinkedIn: Trish</a> 
        <p className="creds">Logo Credit: Chloe Gonzalez age: 11</p>
			</div>
		</footer>
	)
}

export default Footer 