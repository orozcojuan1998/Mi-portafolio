import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact  extends Component{
render () {
    return (
        <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={6}>
            <h2>Juan David Orozco</h2>
            <img 
                src ="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt ="avatar"
                style = {{height: '250px'}}
            />
            <p style ={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Cell>
        <Cell col={6}>
            <h2>Contáctame</h2>
            <hr/>
            <div className = "contact-list">
                <List>
                <ListItem>
                    <ListItemContent style = {{fontSize: '28px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                         +57 3225686346
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent style = {{fontSize: '28px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                         orozco_juan@javeriana.edu.co
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent style = {{fontSize: '28px', fontFamily: 'Anton'}}>
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                         www.fb.com/ingjuanorozco
                    </ListItemContent>
                </ListItem>
                </List>
            </div>
            
        </Cell>
        </Grid>
           
        </div>
    )
}

}
export default Contact;