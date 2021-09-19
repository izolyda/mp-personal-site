import React from 'react';
import './left-panel.styles.scss';

import LeftPanelItem from './left-panel-item.component.jsx';

import {imgPaths} from './image-paths.js';


class LeftPanel extends React.Component {
	
	constructor(props) {
    	super(props);

    	this.state = {
    	};
	}

	render(){
		return (
			<div className="left-panel">
				<div className="img-list-container">
					<div className="img-list">
						{imgPaths.map(e => 
							
               				 <LeftPanelItem
                				uri={e}
                			/>
            			)}

					</div>
				</div>
			</div>
			);
	}
}

export default LeftPanel;