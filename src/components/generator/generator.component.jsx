import React from 'react';
import axios from 'axios';
import './generator.styles.scss';
import ResultImage from './result-image.component.jsx';
import ImgEditor from '../imgeditor/imgeditor.component.jsx';

import {connect} from 'react-redux';
import {setImage, setCurrentImage} from '../../redux/images/images.actions.js';


class Generator extends React.Component {

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

                    this.props.setCurrentImage(image);
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
            <div className = {`main-container ${(this.props.expandedLeft && this.props.expandedRight) ? "main-container-shrinked-both" : ""} 
                                              ${(this.props.expandedLeft || this.props.expandedRight) ? "main-container-shrinked-oneside" : ""}`}>
                <div className="main-container-body">
                    <div className="btn-wrapper">
                        <button type="button" className="get-image-button"
                                onClick={() => this.fetchImages(this.props.networkSelected, parseInt(this.props.seedSelected), this.props.noiseSelected, parseFloat(this.props.truncationSelected), this.props.class_idx_Selected)}>GENERATE</button>
                    </div>
                    <div className="main-working-area">

                        <div className="result-img-container" id="generatedImageContainer" >

                            <ResultImage src={this.props.currentImage} />
                            <ImgEditor key={this.props.currentIdx} />
                        </div>


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
    currentImage: state.image.currentImage,
    imagePreview: state.image.imagePreview,
    currentIdx: state.image.currentIdx,

    expandedLeft: state.collapsible.expandedLeft,
    expandedRight: state.collapsible.expandedRight,
});

const mapDispatchToProps = dispatch => ({
    setImage: image => dispatch(setImage(image)),
    setCurrentImage: image => dispatch(setCurrentImage(image)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Generator);



