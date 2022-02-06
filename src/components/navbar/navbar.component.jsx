import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

import {connect} from 'react-redux';
import {setLite, setDark} from '../../redux/theme/theme.actions.js';

class Navbar extends React.Component {



	render() {

		const setDark = (event) => {
			event.preventDefault();
			this.props.setDark(false);
		}

		const setLite = (event) => {
			event.preventDefault();
			this.props.setLite(true);
		}


		return (

			// <div className="navbar navbar-expand-lg navbar-light ">
			<div className={"navbar navbar-expand-lg "}>
				<Link to='/' className='option-link'>
					<Logo className='logo'/>
				</Link>

				<button className="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
						aria-label="Toggle navigation">
					<Link className="text-white" to="#">
						<i className="fa fa-bars"></i>
					</Link>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto mr-0">
						<Link className={"nav-item nav-link"}  to="/">Home <span
							className="sr-only">(current)</span></Link>
						<Link className={"nav-item nav-link"}  to="/about">Articles</Link>
						<Link className={"nav-item nav-link"}   to="/imgenerator">Image Generator</Link>
						<Link className={"nav-item nav-link"}   to="/social">Social</Link>
						<Link className={"nav-item nav-link"}   to="/contacts">Contacts</Link>

						<button type="button" className={"theme-dark-btn"} onClick={(event) => setDark(event)}/>

						<button type="button" className={"theme-lite-btn"} onClick={(event) => setLite(event)}/>

					</div>
				</div>
			</div>


		)
	};

};

const mapStateToProps = state => ({
	theme: state.theme.lite,
});

const mapDispatchToProps = dispatch => ({
	setDark: theme => dispatch(setDark(theme)),
	setLite: theme => dispatch(setLite(theme)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);