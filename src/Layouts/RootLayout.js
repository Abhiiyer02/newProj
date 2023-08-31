import AppBar from '@mui/material/AppBar'
// import Toolbar from '@material-ui/core/Toolbar';
import {Typography,Toolbar} from '@mui/material';
// import { Toolbar,Typography } from '@mui/material'
import {Button}  from '@mui/material'
import '../index.css';
import { makeStyles } from '@mui/styles';
import { Outlet, NavLink } from 'react-router-dom'


const useStyles = makeStyles((theme) => {
  return {
    appBarSpacer: theme.mixins.Toolbar
  }
})

export default function RootLayout() {
  const classes = useStyles()

  return (
    <div className='root-layout'>

      <AppBar position="fixed" color="primary" className='Appbar' elevation={0} >
      <div className='root-layout-div'>
          <Typography className='logout' variant="h6">
            Hi Username
          </Typography>
          <Button  color = "success"variant="contained" onClick={<NavLink to="logout"/>}>Logout</Button>
      </div>
        <Toolbar>
        {/* <Outlet/> */}
          
          
        </Toolbar>
      </AppBar>
      <div className={classes.appBarSpacer}>
        <Outlet />
      </div>
    </div>
  )
}

{/* <div className='root-layout'>

<AppBar position="fixed" color="primary" className='Appbar' elevation={0} >
<div className='root-layout-div'>
    <Typography className='logout' variant="h6">
      Hi Username
    </Typography>
    <Button  color = "success"variant="contained" onClick={<NavLink to="logout"/>}>Logout</Button>
    
    </div>
  <Toolbar>
  <Outlet/>
    
    
  </Toolbar>
</AppBar>
{/* <Outlet /> }
</div> */}