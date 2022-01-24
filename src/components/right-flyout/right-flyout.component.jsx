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
        this.props.setSeed(event.target.value);

    };

    setTruncValue = (event) => {
        this.props.setTruncation(event.target.value);

    };

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
            <div className={`right-side-panel ${this.props.expandedRight ? "right-side-panel-expanded" : ""}`}>
                <div className="right-panel-toggle">
                    <button className="right-toggle-btn" id="rightToggleBtn"
                            onClick={this.toggleRightMenu}>{element}</button>
                </div>

                <div className="right-flyout">
                    <div className="element-list-container">
                        <div className="element-list">


                            <div className="list-item" key="1">
                                <div className="drop-down">

                                    <label htmlFor="touch"><span
                                        className="dropdown-expander-label">NETWORK</span></label>
                                    <input type="checkbox" id="touch"/>

                                    <ul className="slide">
                                        {
                                            this.props.network_options.map((network, index) => (
                                                <li key={index}>
                                                    <input type="checkbox" name="network"
                                                           value={network.value}
                                                    className="dropdown-checkbox"
                                                    onChange={() => this.props.setNetwork(network.value)}/>
                                                    <label className="dropdown-name-label"> {network.name} </label>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>


                            <div className="list-item" key="2">
                                <div className="slider">
                                    <label className="slider-label-text">Seed:</label>
                                    <div id="seedRangeValue" className="range-value">{this.props.seedSelected}</div>
                                    <input id="seedRangeInput" className="range-input" type="range"
                                           min={this.props.seed_min_max[0]} max={this.props.seed_min_max[1]}
                                           value={this.props.seedSelected}
                                           onChange={(e) => this.setSeedValue(e)}
                                           onKeyDown={this.handleKeyDownSeed}/>
                                </div>
                            </div>


                            <div className="list-item" key="3">
                                <div className="slider">
                                    <label className="slider-label-text">Truncation:</label>
                                    <div id="truncRangeValue" className="range-value">{this.props.truncationSelected}</div>
                                    <input id="truncRangeInput" className="range-input" type="range"
                                           step="0.05" min={this.props.trunc_min_max[0]} max={this.props.trunc_min_max[1]}
                                           value={this.props.truncationSelected}
                                           onChange={(e) => this.setTruncValue(e)}
                                           onKeyDown={this.handleKeyDownTruncation}/>
                                </div>
                            </div>


                            <div className="list-item" key="4">
                                <div className="drop-down">

                                    <label htmlFor="touchN"><span
                                        className="dropdown-expander-label">NOISE</span></label>
                                    <input type="checkbox" id="touchN"/>

                                    <ul className="slideN">

                                        {
                                            this.props.noise_options.map((noise, index) => (
                                                <li key={index}>
                                                    <input type="checkbox" name="network"
                                                           value={noise}
                                                           className="dropdown-checkbox"
                                                           onChange={() => this.props.setNoise(noise)}/>
                                                    <label className="dropdown-name-label"> {noise} </label>
                                                </li>
                                            ))
                                        }

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

    network_options: state.networkmeta.network_options,
    noise_options: state.networkmeta.noise_options,
    trunc_min_max: state.networkmeta.trunc_min_max,
    seed_min_max: state.networkmeta.seed_min_max,

});

const mapDispatchToProps = dispatch => ({
    setNetwork: network => dispatch(setNetwork(network)),
    setSeed: seed => dispatch(setSeed(seed)),
    setTruncation: truncation => dispatch(setTruncation(truncation)),
    setNoise: noise => dispatch(setNoise(noise)),

    expandRight: collapsible => dispatch(expandRight(collapsible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RightFlyout);

