import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
 	padding: 0.625rem 0.9rem;
    cursor: pointer;

`;

export const HeaderContainer = styled.div`
	background-color: #663399;
	opacity: 0.8;
	height: 4.4rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.6rem;
`;

export const LogoContainer = styled(Link)`

	height: 100%;
    width: 6rem;
    padding: 0.5rem;

`;


export const OptionsContainer = styled.div`
	width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
	${OptionContainerStyles}
	text-decoration: none;
	color: white;
	&:hover{
		text-decoration:none;
		color: #696969;
	}
`;

