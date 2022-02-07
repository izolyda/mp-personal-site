import React from 'react';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

import { useDispatch } from "react-redux";

import {setLite, setDark} from '../../redux/theme/theme.actions.js';

function Navbar(){

	const dispatch = useDispatch();
	const [user] = useAuthState(auth);

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
						<Link className={"nav-item nav-link"}  to="/articles">Articles</Link>
						<Link className={"nav-item nav-link"}   to="/imgenerator">Image Generator</Link>
						<Link className={"nav-item nav-link"}   to="/social">Social</Link>
						<Link className={"nav-item nav-link"}   to="/contacts">Contacts</Link>
						{
							(user) ?
								<Link className={"nav-item nav-link"}  to="/logout">Logout</Link>
								:
								<Link className={"nav-item nav-link"}  to="/login">Login</Link>

						}


						<button type="button" className={"theme-dark-btn"} onClick={() => dispatch(setDark(false))}/>

						<button type="button" className={"theme-lite-btn"} onClick={() => dispatch(setLite(true))}/>

						{
							(user) ?
								<Link className={"nav-item nav-link"}  to="/dashboard">Dashboard</Link>
								:
								<div/>
						}

					</div>
				</div>
			</div>


		)


};


export default Navbar;