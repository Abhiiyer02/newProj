import { AppBar } from "@mui/material";
import { Toolbar,Button} from '@mui/material'
import { NavLink, Outlet } from "react-router-dom";
import '../index.css';
import OECard from '../Components/OECard';

export default function StaffLayout() {
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

            <OECard/>
            <Outlet />
        </div>
    )
}