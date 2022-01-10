import React from 'react';
import './left-panel.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';


import LeftPanelItem from './left-panel-item.component.jsx';

import {imgPaths} from './image-paths.js';

import { connect } from 'react-redux';

const element = <FontAwesomeIcon icon={ faFilm } />;



class LeftPanel extends React.Component {
	
	constructor(props) {
    	super(props);

    	
	}

	toggleLeftMenu = () => {
		let element = document.getElementById('leftToggleBtn');
		let btnWraper = element.closest('div');
		let panelWrapper = btnWraper.nextElementSibling;
		let target = panelWrapper.firstChild;

		target.style.left = (target.style.left === "-256px") ? "0px" : "-256px";
		
	}


	render(){
	
		return (
			<div className="left-side-panel">
				<div className = "left-panel-toggle">
						<button className = "left-toggle-btn" id ="leftToggleBtn" onClick={this.toggleLeftMenu}>{ element }</button>
				</div>
				<div id="left-panel-wrapper">
					<div className="left-panel">
						<div className="img-list-container">
							<div className="img-list">
								{/*{imgPaths.map(e => 
		               				 <LeftPanelItem
		                				uri={e} 
		                			/>
		            			)}*/}
		            			{
		            				this.props.images.map((img, index) =>
		            						<LeftPanelItem image={img} key={index} />
		            					)
		            			}
					</div>
						</div>
					</div>
				</div>
				</div>
			);
	
	}
}

const mapStateToProps = state => ({
		images: state.image.images,
	});

export default connect(mapStateToProps)(LeftPanel);