import React from 'react';
import './right-flyout.styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCogs} from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import {setNetwork, setSeed, setTruncation, setNoise} from '../../redux/modelparameters/modelparameters.actions.js';

import {expandRight} from '../../redux/collapsible/collapsible.actions.js';

const element = <FontAwesomeIcon icon={faCogs}/>;


class RightFlyout extends React.Component {

    toggleRightMenu = () => {

        this.props.expandRight(!this.props.expandedRight);
    };

    setSeedValue = (event) => {
        document.getElementById('seedRangeValue').innerHTML = event.target.value;
        this.props.setSeed(event.target.value);

    };

    setTruncValue = (event) => {
        document.getElementById('truncRangeValue').innerHTML = event.target.value;
        this.props.setTruncation(event.target.value);

    };

    handleNetworkSelection = (event) => {

        let checkboxes = document.getElementsByName("network");
        let network = "";

            if(checkboxes[0].checked){
                network = checkboxes[0].value;
                checkboxes[1].checked = false;
                this.props.setNetwork(network);
            }
            else if(checkboxes[1].checked) {
                network = checkboxes[1].value;
                checkboxes[0].checked = false;
                this.props.setNetwork(network);
            }
            else {
                network = 'universe';
                this.props.setNetwork(network);
            }
    }

    handleNoiseSelection = (event) => {

        let checkboxes = document.getElementsByName("noise");
        let noise = "";

        if(checkboxes[0].checked){
            noise = checkboxes[0].value;
            checkboxes[1].checked = false;
            checkboxes[2].checked = false;
            this.props.setNoise(noise);
        }
        else if(checkboxes[1].checked) {
            noise = checkboxes[1].value;
            checkboxes[0].checked = false;
            checkboxes[2].checked = false;
            this.props.setNoise(noise);
        }
        else if(checkboxes[2].checked) {
            noise = checkboxes[2].value;
            checkboxes[0].checked = false;
            checkboxes[1].checked = false;
            this.props.setNoise(noise);
        }
        else {
            noise = 'none';
            this.props.setNoise(noise);
        }
    }

    handleKeyDownSeed = (event) => {

        // arrow up/down button should select next/previous list element
        if (event.keyCode === 38) {
            if (this.props.seedSelected < 65536) {
                this.props.setSeed(event.target.value + 1);
            }

        } else if (event.keyCode === 40) {
            if (this.props.seedSelected > 0) {
                this.props.setSeed(event.target.value - 1);
            }

        }
    };

    handleKeyDownTruncation = (event) => {

        // arrow up/down button should select next/previous list element
        if (event.keyCode === 38) {
            if (this.props.truncationSelected < 1) {
                this.props.setTruncation(event.target.value + 0.05);
            }

        } else if (event.keyCode === 40) {
            if (this.props.truncationSelected > 0) {
                this.props.setTruncation(event.target.value - 0.05);
            }

        }
    };

    render() {
        return (
            <div className={`right-side-panel ${this.props.expandedRight? "right-side-panel-expanded" : ""}`}>
                <div className="right-panel-toggle">
                    <button className="right-toggle-btn" id="rightToggleBtn"
                            onClick={this.toggleRightMenu}>{element}</button>
                </div>

                    <div className="right-flyout">
                        <div className="element-list-container">
                            <div className="element-list">


                                <div className="list-item" key="1">
                                    <div className="drop-down">

                                        <label htmlFor="touch"><span className="dropdown-expander-label">NETWORK</span></label>
                                        <input type="checkbox" id="touch"/>

                                        <ul className="slide">
                                            <li>
                                                <input type="checkbox" name="network" value="universe_generator" className="dropdown-checkbox"
                                                       onChange={(e) => this.handleNetworkSelection(e)}/>
                                                <label className="dropdown-name-label"> Universe </label>

                                            </li>
                                            <li>
                                                <input type="checkbox" name="network" value="backgrounds_generator" className="dropdown-checkbox"
                                                       onChange={ (e)=> this.handleNetworkSelection(e)}/>
                                                <label className="dropdown-name-label"> Backgrounds </label>

                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="list-item" key="2">
                                    <div className="slider">
                                        <label className="slider-label-text">Seed:</label>
                                        <div id="seedRangeValue" className="range-value">0</div>
                                        <input id="seedRangeInput" className="range-input" type="range" min="0"
                                               max="65536" onChange={(e) => this.setSeedValue(e)}
                                               onKeyDown={this.handleKeyDownSeed}></input>
                                    </div>
                                </div>


                                <div className="list-item" key="3">
                                    <div className="slider">
                                        <label className="slider-label-text">Truncation:</label>
                                        <div id="truncRangeValue" className="range-value">0</div>
                                        <input id="truncRangeInput" className="range-input" type="range" step="0.05"
                                               min="0" max="1" onChange={(e) => this.setTruncValue(e)}
                                               onKeyDown={this.handleKeyDownTruncation}></input>
                                    </div>
                                </div>


                                <div className="list-item" key="4">
                                    <div className="drop-down">

                                        <label htmlFor="touchN"><span
                                            className="dropdown-expander-label">NOISE</span></label>
                                        <input type="checkbox" id="touchN"/>

                                        <ul className="slideN">
                                            <li>
                                                <input type="checkbox" name="noise" value="none" className="dropdown-checkbox"
                                                       onChange={(e) => this.handleNoiseSelection(e)}/>
                                                <label className="dropdown-name-label"> None </label>

                                            </li>
                                            <li>
                                                <input type="checkbox" name="noise" value="random" className="dropdown-checkbox"
                                                       onChange={ (e) => this.handleNoiseSelection(e)}/>
                                                <label className="dropdown-name-label"> Random </label>

                                            </li>
                                            <li>
                                                <input type="checkbox" name="noise" value="const" className="dropdown-checkbox"
                                                       onChange={ (e) => this.handleNoiseSelection(e)}/>
                                                <label className="dropdown-name-label"> Const </label>

                                            </li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    networkSelected: state.modelparameters.networkSelected,
    seedSelected: state.modelparameters.seedSelected,
    truncationSelected: state.modelparameters.truncationSelected,
    noiseSelected: state.modelparameters.noiseSelected,

    expandedRight: state.collapsible.expandedRight,
});

const mapDispatchToProps = dispatch => ({
    setNetwork: network => dispatch(setNetwork(network)),
    setSeed: seed => dispatch(setSeed(seed)),
    setTruncation: truncation => dispatch(setTruncation(truncation)),
    setNoise: noise => dispatch(setNoise(noise)),

    expandRight: collapsible => dispatch(expandRight(collapsible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RightFlyout);

