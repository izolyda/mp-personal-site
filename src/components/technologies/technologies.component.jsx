import React from 'react';
import './technologies.styles.scss';
import TechnologyCard from '../technologycard/technologycard.component.jsx';

import {technology} from '../technologycard/technology-cards-meta.js';

import { Link } from 'react-router-dom';

// import tilePic from '../../assets/images/react.png';

const Technologies = () => {

	let react = "React";
	let aboutTech = "Lorem ipsum dolor sit amet"
	
	return(

	
		<div className="container">
  			<div className="row">
   				{
					technology.map((card) => (
						<div className="col-md-6 mb-3">
							<TechnologyCard uri={card.uri} name={card.name} description={card.description}/>
						</div>

					))
				}

  			</div>
		</div>
	


	)};

export default Technologies;