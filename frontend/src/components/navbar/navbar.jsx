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
  Link as MuiLink
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Link as RouterLink } from 'react-router-dom'
import DrawerComponent from './drawer.component.jsx'


const PagesLinks = styled(Paper)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  padding: theme.spacing(1),
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.light,
    background: theme.palette.primary.dark,
  }
}))


const NavBar = () => {
  const pages = ['todo', 'addtodo']
  const logo = 'DSDmark'
  const isMoblie = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return (
    <>
      <AppBar position="static" color="primary" component="nav">
        <Toolbar>
          <Box sx={{ "&:hover": { color: "primary.dark" }, }} component={MuiLink} href="https://www.github.com/DSDmark">
            <Grid container columnSpacing="5px" >
              <Grid item >
                <GitHubIcon fontSize="large" />
              </Grid>
              <Grid item >
                <Typography variant="h6">
                  {logo}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          {isMoblie ? (
            <Box ml="auto">
              <DrawerComponent pages={pages} />
            </Box>
          ) : (
            <Box ml="auto">
              <Grid container>
                {pages.map((e) => (
                  <Grid item key={e}>
                    <MuiLink component={RouterLink} to={`/${e}`}>
                      <PagesLinks elevation={4}>
                        {e}
                      </PagesLinks>
                    </MuiLink>
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
