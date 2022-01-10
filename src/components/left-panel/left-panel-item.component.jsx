import React from 'react';
import './left-panel.styles.scss';

import {connect} from 'react-redux';


class LeftPanelItem extends React.Component {
	constructor(props){
		super(props);
	}

	downloadImage(imageURL){
		var download = document.createElement('a');
		download.style = "none";
		download.href = imageURL;
		download.download = 'image.png';
		download.click();
	}

	render() {
		return (
			<div>
				<div className="list-item">
					<div className="image-wrapper">
						<img  className="image" src={this.props.image}/>      	
					</div>
					<div className="button-wrapper">
						<button type="button" className="btn btn-danger">EDIT</button>
						<button type="button" className="btn btn-success" onClick={() => this.downloadImage(this.props.image)}>DOWNLOAD</button>
					</div>
				</div>
				<div className="divider"/>
			</div>

			);
	}
}

const mapStateToProps = state => ({
	images: state.image.images,
});

export default LeftPanelItem;