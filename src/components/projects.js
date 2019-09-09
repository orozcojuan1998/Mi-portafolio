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
                <CardText>Construcción de mi inmobiliaria que permite la visualización de la casa, costos, direcciones y más información relacionada a una propiedad, permite login de usuario tanto compradores y dueños de propiedades, desarrollada en Java y OracleSQL.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/orozcojuan1998/Inmobiliaria" rel="noopener noreferrer" target="_blank">Github</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#4B3F3D', height: '196px', background: 'url(https://icon-library.net/images/java-icon-images/java-icon-images-4.jpg) center / cover'}}>Proyecto Java #2</CardTitle>
                <CardText>Construcción de un sistema de gestión electoral donde se le permite a los ciudadanos votar por los proyectos propuestos por los diferentes entes gubernamentales y así el gobierno tener una percepción de los ciudadanos. Desarrolada usando Java y Sockets.</CardText>
                <CardActions border>
                <Button colored href="https://github.com/orozcojuan1998/Sistema-distribuido-de-votaci-n-de-proyectos-gubernamentales" rel="noopener noreferrer" target="_blank">Github</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#4B3F3D', height: '196px', background: 'url(https://icon-library.net/images/java-icon-images/java-icon-images-4.jpg) center / cover'}}>Proyecto Java #3</CardTitle>
                <CardText>Construcción de un Firewall de software para protección de equipos, cuenta con funcionalidades para bloquear protocolos de red, tales como TCP ó UDP, también bloquea ips de origen o destino y bloqueo de puertos del equipo.</CardText>
                <CardActions border>
                <Button colored href="https://github.com/orozcojuan1998/Firewall" rel="noopener noreferrer" target="_blank">Github</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
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
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                </CardMenu>
            </Card>
            )
        }
        
        else if (this.state.activeTab ===2){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '196px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png) center / cover'}}>Proyecto PHP #1</CardTitle>
                <CardText>Aplicación web dedicada a prestar servicios financieros tales como, manejar una cuenta de ahorros, solicitar créditos y tarjetas de crédito. La arquitectura empleada fue el framework MVC y la base de datos usada fue MariaDB.</CardText>
                <CardActions border>
                <Button colored href="https://github.com/orozcojuan1998/J-A-Bank" rel="noopener noreferrer" target="_blank">Github</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
                </CardMenu>
            </Card>
            )
        }
        
        else if (this.state.activeTab ===3){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '196px', background: 'url(https://dndigital.net/wp-content/uploads/2015/03/ionic-logo-blog-767x355.png) center / cover'}}>Proyecto Ionic #1</CardTitle>
                <CardText>Aplicación móvil centrada en la personalización de dietas y ejercicios, aplicación que le permite al usuario registrarse en una dieta o plan de ejercio ajustado a la medida de sus necesidades.</CardText>
                <CardActions border>
                <Button colored href="https://healthy-routine.web.app/" rel="noopener noreferrer" target="_blank">Github</Button>
                </CardActions>
                <CardMenu style ={{color: '#fff'}}>
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
                <Tab>Ionic</Tab>
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