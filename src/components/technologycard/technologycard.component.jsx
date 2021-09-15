import React from 'react';
import './technologycard.styles.scss';

import { Link } from 'react-router-dom';


class TechnologyCard extends React.Component {
	
	render(){
		return(

		<div className="row">
		  <div className="col-sm-12 col-md-12 col-lg-12">
		    <div className="img-thumbnail">
		      		<img src={this.props.uri} className="mx-auto img-fluid technology-card-img" alt="..."/>
		      <div className="caption text-center">
		        <h3>{this.props.description}</h3>
		        <p>{this.props.about}</p>
		        <p><Link to="#" className="btn btn-primary" role="button">More...</Link></p>
		      </div>
		    </div>
		  </div>
		</div>

		)
	}
		
};

export default TechnologyCard;