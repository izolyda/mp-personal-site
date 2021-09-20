import React from 'react';
import axios from 'axios';
import './generator.styles.scss';
import ResultImage from './result-image.component.jsx';

class Generator extends React.Component {

 constructor(props) {
    super(props);
    
    this.state = {
    	images: []
 	}

 	this.fetchImages = this.fetchImages.bind(this);
  }

fetchImages() {
    axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos/?_limit=3`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }


	render() {
		return (
			<div className="main-container">
				<div className="btn-wrapper">
					<button type="button" class="btn btn-danger" onClick={this.fetchImages}>GET</button>
				</div>
				<div id="scratchpad" className="main-working-area">
					<div className="img-mixer-wrapper">
						<div className="source-img-container">
							<p> SOURCE IMAGE</p>
						</div>
						<div className="seed-result-container">
							<div className="seed-img-container">
								<p> SEED IMAGE</p>
							</div>
							<div className="result-img-container">
								{this.state.images.map(image => (
							      <ResultImage key={image.id} src={image.thumbnailUrl} />
							    ))}
							</div>
						</div>
						<div className="adjustment-parameters-container">
							<p>PARAMETERS TOGGLES</p>
						</div>
					</div>

				</div>
			</div>

			);
	}
}

export default Generator;