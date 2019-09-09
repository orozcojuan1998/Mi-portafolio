import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl'; 

class Skills extends Component{

    render() {
        return (
            <Grid>
                <Cell col={12}>
                <div style={{display: 'flex'}}>{this.props.skill} <ProgressBar style={{margin:'0.5em 4em 0.5em 1em', width:'70%'}} progress={this.props.progress}/> </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;