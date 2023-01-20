import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'

const NavBar = () => {
  const pages = ['todo', 'add']
  return (
    <>
      <AppBar sx={{ background: 'black', color: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ fontSize: '2rem' }} />
            <Typography variant="h5" component="subtitle">
              DSDmark
            </Typography>
            <Box sx={{display:"flex",flexDirection:"row"}}>
                {pages.map((page) => (
                  <Typography  ml={2} key={page} variant="h6" component="a" href={`/${page}`} sx={{color:"white"}} >{page}</Typography>
                ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default NavBar
