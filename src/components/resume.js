import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';

class Resume  extends Component{
render () {
    return (
        <div>
           <Grid>
               <Cell col={4}>
                    <div style ={{textAlign: 'center'}}>
                    <img 
                    src ="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                    alt ="avatar"
                    style = {{height: '200px'}}
                    />
                    <h2 style={{paddingTop:'2em'}}>Juan David Orozco</h2>
                    <h4 style = {{color : 'grey'}}>Ingeniero de sistemas</h4>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '60%'}}/>
                    <p>Perfil profesional</p>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '60%'}}/>
                    <h5>Dirección</h5>
                    <p>Carrera 98A#68A-15</p>
                    <h5>Teléfono</h5>
                    <p>3225686346</p>
                    <h5>Correo</h5>
                    <p>orozco_juan@javeriana.edu.co</p>
                    <h5>Sitio Web</h5>
                    <p>www.mysite.com</p>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '60%'}}/>

                    </div>
               </Cell>
               <Cell className="resume-right-col" col={8}>
                    <h2>Educación</h2>
                    <Education
                    startYear = {2004}
                    endYear = {2014}
                    escuela = {'Institución Educativa San Francisco de Asis'}
                    />
                    <Education
                    startYear = {2015}
                    endYear = {2020}
                    escuela = {'Pontificia Universidad Javeriana'}
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Habilidades</h2>
                    <Skills
                    skill = 'HTML/CSS'
                    progress ={100}
                    />
                    <Skills
                    skill = 'JavaScript'
                    progress ={90}
                    />
                    <Skills
                    skill = 'NodeJS'
                    progress ={60}
                    />
                    <Skills
                    skill = 'React'
                    progress ={50}
                    />
                    
               </Cell>
           </Grid>
        </div>
    )
}

}
export default Resume;
