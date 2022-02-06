import React from 'react';
import './about-page.styles.scss';
import ArticleLoaderComponent from "../../components/article-loader/article-loader.component";

const AboutPage = ({theme}) => (
								<div className={"about-page-container"}>
									<ArticleLoaderComponent/>
								</div>
);



export default AboutPage;