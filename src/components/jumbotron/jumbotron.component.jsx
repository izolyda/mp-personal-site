import React from 'react';
import './jumbotron.styles.scss';

import profilePic from '../../assets/images/linked_profile.jpeg';

import jumbotronBg from '../../assets/images/neurons.jpg';

const Jumbotron = () => {
	
	return(

	<div className=" jumbotron ">
		<span className="profile-pic-container">
			<img className="card-img-top profile-pic" src={profilePic} alt="Card image cap" />
		</span>

		<span className="profile-description">
			<h1 className="display-4 text-light font-weight-bold">Mihaela Pinzaru</h1>
			<p className="lead text-light">Software Developer
			</p>
			<hr className="my-4"/>
			<p className="text-light">...with a passion for all that's science
			</p>
		</span>

  		
		  
	</div>


	)};

export default Jumbotron;