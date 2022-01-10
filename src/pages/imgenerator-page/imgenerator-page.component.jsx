import React from 'react';
import './imgenerator-page.styles.scss';

import Jumbotron from '../../components/jumbotron/jumbotron.component.jsx';
import Footer from '../../components/footer/footer.component.jsx';

import LeftPanel from '../../components/left-panel/left-panel.component.jsx';
import RightFlyout from '../../components/right-flyout/right-flyout.component.jsx';

import Generator from '../../components/generator/generator.component.jsx';

class ImgeneratorPage extends React.Component {
	render()
	{
		return(
			<div className="generator-page-container">
				<LeftPanel/>			
				<RightFlyout/>
				<Generator/>

			</div>
			
		);
	}	
}


export default ImgeneratorPage;