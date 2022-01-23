import React from 'react';
import './left-panel.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

import LeftPanelItem from './left-panel-item.component.jsx';

import { connect } from 'react-redux';

import {expandLeft} from '../../redux/collapsible/collapsible.actions.js';


const element = <FontAwesomeIcon icon={ faFilm } />;



class LeftPanel extends React.Component {
	
	constructor(props) {
    	super(props);

    	
	}

	toggleLeftMenu = () => {

		this.props.expandLeft(!this.props.expandedLeft);

	}


	render(){
	
		return (
			<div id="left-side-panel" className={`left-side-panel ${this.props.expandedLeft? "left-side-panel-expanded" : ""}`}>
				<div className="left-panel-toggle">
						<button className = "left-toggle-btn" id ="leftToggleBtn" onClick={this.toggleLeftMenu}>{ element }</button>
				</div>
					<div className="left-panel">
						<div className="img-list-container scrollbar">
							<div className="img-list">
								{/*{imgPaths.map(e => 
		               				 <LeftPanelItem
		                				uri={e} 
		                			/>
		            			)}*/}
		            			{
		            				this.props.images.map((img, index) =>
		            						<LeftPanelItem image={img} key={index} idx={index}/>
		            					)
		            			}
					</div>
						</div>
					</div>

				</div>
			);
	
	}
}

const mapStateToProps = state => ({
		images: state.image.images,
		expandedLeft: state.collapsible.expandedLeft,
	});

const mapDispatchToProps = dispatch => ({
	expandLeft: collapsible => dispatch(expandLeft(collapsible)),
});



export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);