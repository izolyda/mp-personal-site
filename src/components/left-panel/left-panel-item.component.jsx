import React from 'react';
import './left-panel.styles.scss';

import {connect} from 'react-redux';
import {
	invokeImageEditor,
	invokeImagePreview,
	setCurrentImage,
	setCurrentIndex
} from "../../redux/images/images.actions";


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

	invokeEditor(){
		this.props.invokeImageEditor(true);
		this.props.invokeImagePreview(false);
		this.props.setCurrentImage(this.props.image);
		this.props.setCurrentIndex(this.props.idx);
	}

	render() {
		return (
			<div>
				<div className="list-item">
					<div className="image-wrapper">
						<img className="image" src={this.props.image}/>
					</div>
					<div className="button-wrapper">
						<button type="button" className="btn btn-danger" onClick={() => this.invokeEditor()}>EDIT</button>
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
	displayEditor: state.image.displayEditor,
	currentImage: state.image.currentImage,
});

const mapDispatchToProps = dispatch => ({
	invokeImageEditor: imageEditor => dispatch(invokeImageEditor(imageEditor)),
	invokeImagePreview: imagePreview => dispatch(invokeImagePreview(imagePreview)),
	setCurrentImage: currentImage => dispatch(setCurrentImage(currentImage)),
	setCurrentIndex: currentIdx => dispatch(setCurrentIndex(currentIdx)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanelItem);