import React from 'react';
import './social-page.styles.scss';


const SocialPage = ({theme}) => (
    <div className="grid-container">


        <div className={"twitter-widget"} id={"twitter-wjs"}>

            <a className="twitter-timeline" href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by
                TwitterDev</a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

        </div>
    </div>
);

export default SocialPage;