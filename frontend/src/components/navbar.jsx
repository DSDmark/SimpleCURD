import React from 'react'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material'
import AirIcon from '@mui/icons-material/Air'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import DrawerComponent from './drawer.component.jsx'

const useStyles = makeStyles((theme) => ({
  navlinks: { marginLeft: theme.spacing(10), display: 'flex' },
  logo: { fontSize: '20px', flexGrow: 1, cursor: 'pointer' },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: theme.spacing(2),
    '&:hover': { color: 'yellow' },
  },
}))

const NavBar = () => {
  const pages = ['todolist', 'addtodo']
  const classes = useStyles()
  const logo = 'DSDmark'
  const isMoblie = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return (
    <>
      <AppBar position="static" component="nav">
        <CssBaseline />
        <Toolbar>
          <AirIcon />
          <Typography variant="h6" className={classes.logo}>
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
