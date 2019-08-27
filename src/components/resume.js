import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';
import Experience from './experience';

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
                    <p>Soy ingeniero de sistemas en formación de la Pontificia Universidad Javeriana, interesado principalmente en las áreas de construcción de software, sistemas de información y gestión, arquitectura empresarial y análisis de datos. Mi experiencia laboral ha girado en torno al diseño de sistemas de información y al desarrollo de software en plataformas web y móvil. Además me caracterizo por ser empático, creativo, tener un pensamiento analítico para el diseño de soluciones de software empresarial y con capacidad de adaptabilidad y de trabajo en equipo. </p>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '60%'}}/>
                    <h5>Teléfono</h5>
                    <p>3225686346</p>
                    <h5>Correo</h5>
                    <p>orozco_juan@javeriana.edu.co</p>
                    <h5>Sitio Web</h5>
                    <p>www.juanorozco.tech</p>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '60%'}}/>

                    </div>
               </Cell>
               
               <Cell className="resume-right-col" col={8}>
                    
                <h2>Educación</h2>
                    <Education
                    startYear = {2015}
                    endYear = {2020}
                    escuela = {'Pontificia Universidad Javeriana'}
                    />
                    <h2>Experiencia</h2>
                    <Experience
                    startYear = {'Enero 2018 ' }
                    endYear = {'Junio 2018'}
                    empresa = {'Metrilab ltda.'}
                    descripcion = {'Trabajo en adsdsadd'}
                    />
                    <Experience
                    startYear = {'Agosto 2019 ' }
                    endYear = {'Noviembre 2019'}
                    empresa = {'Fundación San Miguel (práctica social).'}
                    descripcion = {'Trabajo en adsdsadd'}
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
