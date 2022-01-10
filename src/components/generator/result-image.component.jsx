import React from 'react';
import axios from 'axios';
import './generator.styles.scss';

class ResultImage extends React.Component {

	render(){
		return(
				<div>
					 <img className="generated-image" src={this.props.src}></img>
				</div>
			);
	}
}

export default ResultImage;