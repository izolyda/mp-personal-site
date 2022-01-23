import React from 'react';
import './jumbotron.styles.scss';

import profilePic from '../../assets/images/pic1.jpg';

import jumbotronBg from '../../assets/images/neurons.jpg';

const Jumbotron = () => {
	
	return(

	<div className=" jumbotron ">
		<span className="profile-pic-container">
			<img className="card-img-top profile-pic" src={profilePic} alt="Card image cap" />
		</span>

		<span className="profile-description">
			<h1 className="display-4 text-light font-weight-bold">Mihaela Pinzaru</h1>
			<p className="lead text-light">Princess of Sarcasmistan
			</p>
			<hr className="my-4"/>
			<p className="text-light">...and lady of Fukk Antivaxx
			</p>
		</span>

  		
		  
	</div>


	)};

export default Jumbotron;