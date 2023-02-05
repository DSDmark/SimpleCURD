import React, { useState } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  Divider,
  Toolbar,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import {Link} from "react-router-dom";
import AirIcon from '@mui/icons-material/Air';

const DrawerComponent = ({logo,pages}) => {
  const [open, setOpen] = useState(false)
  return <>
    <Drawer open={open} onClose={()=>setOpen(prev=>false)}>
      <Toolbar>
        <Typography>
          {logo}
        </Typography>
        <AirIcon color="primary" onClick={()=>setOpen(prev=>false)}/>
      </Toolbar>
      {pages.map(e=>(
      <Box>
        <List>
          <Divider/>
          <ListItem>
            <ListItemText>
              <Link to={`/${e}`}>
                {e}
              </Link>
            </ListItemText>
            </ListItem>
        </List>
      </Box>
      
      ))}
    </Drawer>
    <IconButton onClick={()=>setOpen((prev)=>!prev)}>
     <AirIcon/>
    </IconButton>
    </>
}

export default DrawerComponent
