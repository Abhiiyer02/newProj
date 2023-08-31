import { AppBar, Grid, Paper } from "@mui/material";
import { Toolbar,Button} from '@mui/material'
import { NavLink, Outlet, json } from "react-router-dom";
import '../index.css';
import {useState,useEffect} from 'react'

import OECard from '../Components/OECard';




const cardStyle = {
    width: '250px',
    height: '250px',
    border: '15px solid blue',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    margin : '0 auto'
  };


export default function StaffLayout() {

    const [oes,setOes] = useState([])
    useEffect(()=>{
    fetch('http://localhost:8000/OE')
      .then(res=>res.json())
      .then(data=>setOes(data))

    },[])






    return (
        <div className="staff-layout">
            {/* <AppBar
              position="fixed"
              elevation={0}
              color="primary"
            >
                <Toolbar> */}
                    
                    <Button color="success" variant="contained" onclick = {<NavLink to="/"/>}>Course List</Button>
                    <Button color="success" variant="contained" onclick = {<NavLink to="/"/>}>Responses</Button>
                    <Button color="success" variant="contained" onclick = {<NavLink to="/"/>}>Allotment</Button>

                {/* </Toolbar>
            </AppBar> */}
            <Grid container spacing={3}  >
                {oes.map(oe=>(
                    <Grid  key={oe.id} item xs={12} md={6} lg={3}>
                    {/* <Paper>{note.title}</Paper> */}
                    <OECard link={oe} ></OECard>
                    </Grid>
                ))}
            </Grid>
            
            <Outlet />
        </div>
    )
}