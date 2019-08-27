import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects  extends Component{
    constructor (props){
        super(props);
        this.state = { activeTab:0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className ="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#4B3F3D', height: '196px', background: 'url(https://icon-library.net/images/java-icon-images/java-icon-images-4.jpg) center / cover'}}>Proyecto Java #1</CardTitle>
                <CardText>Construcción de mi portafolio personal con. Construcción de mi portafolio personal con el propósito de mostrar mi trabajo, mis estudios y a que me dedico.</CardText>
                <CardActions border>
                    <Button colored href="https://www.juanorozco.tech/" rel="noopener noreferrer" target="_blank">Github</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#4B3F3D', height: '196px', background: 'url(https://icon-library.net/images/java-icon-images/java-icon-images-4.jpg) center / cover'}}>Proyecto Java #2</CardTitle>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>       
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#4B3F3D', height: '196px', background: 'url(https://icon-library.net/images/java-icon-images/java-icon-images-4.jpg) center / cover'}}>Proyecto Java #3</CardTitle>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>
            </Card>
                </div>
               
            )
        }
        else if (this.state.activeTab ===1){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '196px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>Proyecto React #1</CardTitle>
                <CardText>Construcción de mi portafolio personal por medio de ReactJS, con el propósito de mostrar mi trabajo, mis estudios y a que me dedico.</CardText>
                <CardActions border>
                    <Button colored href="https://www.juanorozco.tech/" rel="noopener noreferrer" target="_blank">Github</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>
            </Card>
            )
        }
        else if (this.state.activeTab ===2){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '196px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1</CardTitle>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>
            </Card>
            )
        }
        else if (this.state.activeTab ===3){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '196px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1</CardTitle>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>
            </Card>
            )
        }
    }
    
render () {
    return (
        <div className ="category-tabs">
            <Tabs activeTb = {this.state.activeTab} onChange ={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>Java</Tab>
                <Tab>React</Tab>
                <Tab>PHP</Tab>
                <Tab>MongoDB</Tab>
            </Tabs>
                
                <Grid >
                <Cell col ={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>
            
        </div>
    )
}

}
export default Projects;