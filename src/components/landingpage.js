import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage  extends Component{
render () {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className = "landing-grid">
                <Cell col ={12}>
                <img 
                src = "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
                alt = "avatar" 
                className = "avatar-img"
                />
                <div className ="banner-text">
                <h1>Full Stack Developer</h1>
                <hr/>
                <p>HTML/CSS | Boostrap | JavaScript | React | SQL | PHP</p>
                <div className ="social-links">
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                </div>
                </div>
                </Cell>
            </Grid>
        </div>
    )
}

}
export default LandingPage;