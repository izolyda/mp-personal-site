import React from 'react';
import axios from 'axios';
import './generator.styles.scss';
import ResultImage from './result-image.component.jsx';

import {connect} from 'react-redux';
import {setImage} from '../../redux/images/images.actions.js';


// function Generator({networkSelected, seedSelected, noiseSelected, truncationSelected}){

//const Generator = ({networkSelected, seedSelected, noiseSelected, truncationSelected}) => {

class Generator extends React.Component {
    // constructor(props) {
    //    super(props);

    //    this.state = {
    //    	images: [],
    // 	}

    // 	this.fetchImages = this.fetchImages.bind(this);
    //  }

    fetchImages = (network, seed, noise, truncation, class_idx) => {

        const json = {
            "network": network,
            "seeds": [seed],
            "truncation_psi": truncation,
            "noise_mode": noise,

        };

        if(network === "backgrounds_generator"){
            json["class_idx"] = class_idx;
        }

        console.log(json);

        const headers = {
            "Content-Type": "application/json"
        }

        axios.post('http://localhost:8000/model/', json, {headers})
            .then(response => {
                    const image = response.data.image;

                    console.log("Inside axios response:" + image);

                    this.props.setImage(image);

                }
            )
            .catch(error => {
                    console.log(error.message)
                }
            );
    };

    render() {
        return (
            <div className="main-container">
                {/*<p>{ this.props.networkSelected }</p>
					<p>{ this.props.seedSelected }</p>
					<p>{ this.props.truncationSelected }</p>
					<p>{ this.props.noiseSelected }</p>*/}
                <div className="btn-wrapper">
                    <button type="button" className="get-image-button shrink-border"
                            onClick={() => this.fetchImages(this.props.networkSelected, parseInt(this.props.seedSelected), this.props.noiseSelected, parseFloat(this.props.truncationSelected), this.props.class_idx_Selected)}>GENERATE
                    </button>
                </div>
                <div id="scratchpad" className="main-working-area">

                    <div className="result-img-container" id="generatedImageContainer">
                        <ResultImage src={this.props.images[0]}/>

                        {/*{this.props.images.map(img => (
							      
							      	<ResultImage src={ img } />

							      ) )}*/}

                    </div>


                </div>
            </div>

        )
    };
};


const mapStateToProps = state => ({
    networkSelected: state.modelparameters.networkSelected,
    seedSelected: state.modelparameters.seedSelected,
    truncationSelected: state.modelparameters.truncationSelected,
    noiseSelected: state.modelparameters.noiseSelected,
    class_idx_Selected: state.modelparameters.class_idx,

    images: state.image.images,
});

const mapDispatchToProps = dispatch => ({
    setImage: image => dispatch(setImage(image)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Generator);



