import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import myself from "./assets/avatar.png";

class LandingPage  extends Component{
render () {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className = "landing-grid">
                <Cell col ={12}>
                <img 
                src = {myself}
                alt = "avatar" 
                className = "avatar-img"
                />
                <div className ="banner-text">
                <h1>Test Automation Engineer</h1>
                <hr/>
                <p>Selenium | Cypress | Cucumber | Jira | JS/TS | Node | Java | SQL</p>
                <div className ="social-links">
                <a href="https://www.linkedin.com/in/juan-david-orozco-5b59b6168/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/orozcojuan1998" rel="noopener noreferrer" target="_blank">
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
