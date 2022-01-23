import React from 'react';
import './home-page.styles.scss';

import Jumbotron from '../../components/jumbotron/jumbotron.component.jsx';
import Technologies from '../../components/technologies/technologies.component.jsx';
import Footer from '../../components/footer/footer.component.jsx';

import AlternateTimeline from '../../components/timeline/timeline.component.jsx';


const HomePage = () => (
	<div>

				<Jumbotron/>

			<div>
				<Technologies/>
			</div>
			<div>
				<AlternateTimeline/>
			</div>
			<div>
				<Footer/>
			</div>
	</div>
								
);


export default HomePage;