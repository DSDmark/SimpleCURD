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
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import OpenWithIcon from '@mui/icons-material/OpenWith';

const DrawerComponent = ({ pages }) => {
  const [open, setOpen] = useState(false)
  return <>
    <Drawer open={open} onClose={() => setOpen(prev => !prev)}>
      <Toolbar>
        <IconButton onClick={() => setOpen((prev) => !prev)}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
      {pages.map(e => (
        <Box key={window.crypto.randomUUID()}>
          <List>
            <Divider />
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
    <IconButton sx={{ bgcolor: "primary.light", ":hover": { bgcolor: "primary.dark" } }} onClick={() => setOpen((prev) => !prev)}>
      <OpenWithIcon />
    </IconButton>
  </>
}

export default DrawerComponent
