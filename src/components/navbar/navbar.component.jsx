import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './navbar.styles.jsx';
import './navbar.styles.scss';



const Navbar = () => {
	
	return(
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className='logo'/>
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/about'> 
					ABOUT 
				</OptionLink>
				<OptionLink to='/contact'> 
					CONTACT 
				</OptionLink>
				
			</OptionsContainer>

		</HeaderContainer>

	)};

// const mapStateToProps = createStructuredSelector({

// });


// const mapDispatchToProps = dispatch => ({
// 	signOutStart: () => dispatch(signOutStart())
// });

export default Navbar;