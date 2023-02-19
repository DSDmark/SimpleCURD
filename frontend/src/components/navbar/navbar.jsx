import React from 'react'
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  useMediaQuery,
  Box,
  Paper,
  styled,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Link } from 'react-router-dom'
import DrawerComponent from './drawer.component.jsx'


const PagesLinks = styled(Paper)(({theme})=>({
  marginLeft:theme.spacing(2),
  ":hover":{background:theme.palette.primary.dark,"&>a":{color:theme.palette.primary.light}},
  padding:theme.spacing(1),
}))

const Links = styled(Link)(({theme})=>({
  ...theme.typography.button,
  textDecoration:"none",
  fontWeight:"bold",
}))

const NavBar = () => {
  const pages = ['todo', 'addtodo']
  const logo = 'DSDmark'
  const isMoblie = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return (
    <>
      <AppBar position="static" color="primary" component="nav">
        <Toolbar>
          <Box>
            <Grid container>
              <Grid item xs={3} p={1}>
                <GitHubIcon  fontSize="large"/>
              </Grid>
              <Grid item xs={9}> 
                <Typography variant="h6" p={1}> 
                  {logo}
                </Typography>
              </Grid>
            </Grid>
            </Box>
          {isMoblie ? (
            <DrawerComponent logo={logo} pages={pages} />
          ) : (
              <Box ml="auto">
                <Grid container columnSpacing={1}>
                  {pages.map((e) => (
                    <Grid item key={e}>
                      <PagesLinks elevation={4}>
                        <Links to={`/${e}`} >
                          {e}
                        </Links>
                      </PagesLinks>
                    </Grid>

                  ))}
                </Grid>

              </Box>
            )}
        </Toolbar>
      </AppBar>
      </>
  )
}

export default NavBar
