import React from 'react';
import{ List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const Listas = () => {
    return(
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <BusinessCenterIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Serviços"/>
                </ListItem>
                <Divider/>
            </List>
        </div>
    )
}

export default Listas;

/*https://www.youtube.com/watch?v=BhsCfEe-zJE*/