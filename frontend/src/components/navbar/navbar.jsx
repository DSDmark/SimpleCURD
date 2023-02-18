import React from 'react'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useMediaQuery,
  Box,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import DrawerComponent from './drawer.component.jsx'

const useStyles = makeStyles((theme) => ({
  navlinks: { marginLeft: theme.spacing(2), display: 'flex' },
  logo: {...theme.typography.subtitle1 ,flexGrow: 1, cursor: 'pointer' },
  link: {
    textDecoration: 'none',
    color: 'white',
    marginLeft: theme.spacing(2),
    '&:hover': { color: 'yellow' },
  },
}))

const NavBar = () => {
  const pages = ['todo', 'addtodo']
  const classes = useStyles()
  const logo = 'DSDmark'
  const isMoblie = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return (
    <>
      <AppBar position="static" color="primary" component="nav">
        <CssBaseline />
        <Toolbar>
          <GitHubIcon />
          <Typography variant="subtitle1" className={classes.logo}>
            {logo}
          </Typography>
          {isMoblie ? (
            <DrawerComponent logo={logo} pages={pages} />
          ) : (
            <Box className={classes.navlinks}>
              {pages.map((e) => (
                <Link key={e} className={classes.link} to={`/${e}`}>
                  {e}
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
