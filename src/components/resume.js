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
                    descripcion = {'Mantenimiento y soporte de equipos y servidores, encargado de migrar la página web de la compañia y de capacitar al personal en herramientas de ofimática y el uso del CRM Maximizer'}
                    />
                    <Experience
                    startYear = {'Agosto 2019 ' }
                    endYear = {'Noviembre 2019'}
                    empresa = {'Fundación San Miguel (práctica social).'}
                    descripcion = {'Diseñar e implementar la página web de la fundación San Miguel'}
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Habilidades</h2>
                    <Skills
                    skill = 'C/C++'
                    progress ={100}
                    />
                    <Skills
                    skill = 'Java SE'
                    progress ={100}
                    />
                    <Skills
                    skill = 'C#/.NET'
                    progress ={100}
                    />
                    <Skills
                    skill = 'PHP 7'
                    progress ={100}
                    />
                    <Skills
                    skill = 'HTML/CSS'
                    progress ={90}
                    />
                    <Skills
                    skill = 'Boostrap'
                    progress ={90}
                    />
                    <Skills
                    skill = 'JavaSscript'
                    progress ={70}
                    />
                    <Skills
                    skill = 'TypeScript'
                    progress ={70}
                    />
                    <Skills
                    skill = 'JavaEE'
                    progress ={50}
                    />
                    <Skills
                    skill = 'J Query'
                    progress ={50}
                    />
                    <Skills
                    skill = 'Node JS'
                    progress ={50}
                    />
                    <Skills
                    skill = 'React JS'
                    progress ={50}
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Herramientas y tecnologías</h2>
                    <ul>
                        <li>Spring</li>
                        <li>MVC Framework</li>
                        <li>git</li>
                        <li>GitHub</li>
                        <li>Excel</li>
                        <li>Scrum</li>
                        <li>OracleSQL</li>
                        <li>MySQL</li>
                        <li>PowerBI</li>
                        <li>Angular</li>
                        <li>UML</li>
                        <li>Archimate</li>
                    </ul>
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Actividades</h2>
                    <p>Miembro del comité estudiantil de la carrera
                    de ingeniería de sistemas de la Pontificia Universidad Javeriana.</p>
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Idiomas</h2>
                    <p>Ingles (B2)</p>
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Logros</h2>
                    <p>Tercer puesto del Space Apps 2016 con el
                    equipo de Lunaticos, equipo multidisciplinario,
                    con el que se desarrolló una App para que los
                    niños puedan aprender sobre la luna y el espacio.</p>
               </Cell>
           </Grid>
        </div>
    )
}

}
export default Resume;
