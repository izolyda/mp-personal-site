import React from 'react';
import './generator.styles.scss';

import {connect} from 'react-redux';

class ResultImage extends React.Component {


	render(){

		return(
				<div  className={`${this.props.imagePreview? "imgpreview" : "imgpreview-placeholder"} `}>
					 <img className={"generated-image"} src={this.props.src}/>
				</div>
			);

	}
}

const mapStateToProps = state => ({
	imagePreview: state.image.imagePreview,
	imageEditor: state.image.imageEditor,
});



export default connect(mapStateToProps)(ResultImage);