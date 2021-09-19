import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './jumbotron.styles.scss';

import profilePic from '../../assets/images/pic1.jpg';

import { Link } from 'react-router-dom';

const Jumbotron = () => {
	
	return(

	<div className=" jumbotron ">

		
  		<img className="card-img-top profile-pic" src={profilePic} alt="Card image cap" />
		

  		<h1 className="display-4 text-light font-weight-bold">Mihaela Pinzaru</h1>
  		<p className="lead text-light">Princess of Sarcasmistan
  		</p>
  		<hr className="my-4"/>
  		<p className="text-light">...and lady of Fukk Antivaxx
  		</p>
  		
		  
	</div>


	)};

export default Jumbotron;