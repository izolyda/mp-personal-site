import React from 'react';
import './imgenerator-page.styles.scss';

import Jumbotron from '../../components/jumbotron/jumbotron.component.jsx';
import Footer from '../../components/footer/footer.component.jsx';

import LeftPanel from '../../components/left-panel/left-panel.component.jsx';



class ImgeneratorPage extends React.Component {
	render()
	{
		return(
			<div>
				<LeftPanel/>
			</div>
			
		);
	}	
}


export default ImgeneratorPage;