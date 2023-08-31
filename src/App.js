
import './App.css';
import { Route, createBrowserRouter,RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//Layouts
import StaffLayout from './Layouts/StaffLayout';
import RootLayout from './Layouts/RootLayout';
import Courses from './pages/Staff/Courses';
import Responses from './pages/Staff/Responses';
import Allotment from './pages/Staff/Allotment';
import OECard from './Components/OECard';
import AuthProvider  from './utils/auth';

const theme = createTheme();

function App() {
  const router  = createBrowserRouter(
    createRoutesFromElements(
      // <Routes>
      //   <Route path="/" element={!user ? <LoginPage /> : <Navigate to ={user.isStaff ? '/staff/' : '/student/'} replace = {true}/>} />
      //   <Route element = {<PrivateRoutesStaff/>}>
      //     <Route path = "/staff/*" element = {<StaffPage/>}/>
      //   </Route>
      //   <Route element = {<PrivateRoutesStudent/>}>
      //     <Route path = "/student/*" element = {<StudentPage/>}/>
      //   </Route>
      //   <Route element = {<PrivateRoutes/>}>
      //     <Route path = "/elective/:electiveName/*" element = {<ElectivePage/>}/>
      //   </Route>
      // </Routes>
      
      <Route path="/" element = {<RootLayout />}>
        <Route path='staff' element={<StaffLayout />}>
          
            <Route path='courses' element={<Courses/>} />
            <Route path='responses' element={<Responses/>} />
            <Route path='allotment' element={<Allotment/>} />
        </Route>
        {/* <Route path='student' element={<StudentLayout />} /> */}

      </Route>
    )
  )
  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
        <RouterProvider router={router} />
      </ThemeProvider>  
    </div>
  );
}

export default App;
