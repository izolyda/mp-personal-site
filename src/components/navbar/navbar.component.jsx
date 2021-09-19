import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';


import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';



const Navbar = () => {
	
	return(

	<div className="navbar navbar-expand-lg navbar-light ">
  		<Link to='/' className='option-link'>
				<Logo className='logo'/>
	 	</Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <Link className="text-white" to ="#">
		    	<i className="fa fa-bars"></i>
		    </Link>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		    <div className="navbar-nav ml-auto mr-0">
		      <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
		      <Link className="nav-item nav-link" to="/about">About</Link>
		      <Link className="nav-item nav-link" to="/imgenerator">Image Generator</Link>
		      <Link className="nav-item nav-link" to="/hobbies">Hobbies</Link>
		      <Link className="nav-item nav-link" to="/contacts">Contacts</Link>
		    </div>
		  </div>
	</div>


	)};


export default Navbar;