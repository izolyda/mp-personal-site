import React from 'react';
import './left-panel.styles.scss';


class LeftPanelItem extends React.Component {
	render() {
		return (
			<div>
				<div className="list-item">
					<div className="image-wrapper">
						<img  className="image" src={this.props.uri}/>
					</div>
					<div className="button-wrapper">
						<button type="button" class="btn btn-danger">EDIT</button>
						<button type="button" className="btn btn-success">DOWNLOAD</button>
					</div>
				</div>
				<div className="divider"/>
			</div>

			);
	}
}

export default LeftPanelItem;