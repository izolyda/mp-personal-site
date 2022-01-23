import React from 'react';
import './generator.styles.scss';

import {connect} from 'react-redux';

class ResultImage extends React.Component {


	render(){

		return(
				<div  className={`imgpreview${this.props.imagePreview ? "" : "-hidden"}`}>
					<div className="imgpreview-placeholder">

					</div>
					 <img className="generated-image" src={this.props.src}></img>
				</div>
			);

	}
}

const mapStateToProps = state => ({
	imagePreview: state.image.imagePreview,
	imageEditor: state.image.imageEditor,
});



export default connect(mapStateToProps)(ResultImage);