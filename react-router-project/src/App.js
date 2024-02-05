import './App.css';

import Contact from './components/Contact/contact';
import Home from './components/Home/home';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import Success from './components/Sucess/success';
import NotFound from './components/NotFound/notFound';
import projects from './components/Projects/projects';
import Featured from './components/Projects/featured';
import NewProjects from './components/Projects/newProjects';
import Users from './components/users';
import UserDetails from './components/userDetails';
import React from 'react';
import Login from './components/Login/login';
import { AuthContextProvider } from './Context/authContext';
import Logout from './components/Logout/logout';
import PrivateRoute from './components/PrivateRoute/Private';

const LazyAbout = React.lazy(() => import("./components/About/about"))

function App() {
  return (
    <AuthContextProvider className="App">
       <Header/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' element={<React.Suspense fallback = "Loading..."><LazyAbout/></React.Suspense>}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/success' Component={Success}/>
        
        <Route path='/projects' Component={projects}>
           <Route index Component={Featured}/>
           <Route  path='featured' Component={Featured}/>
           <Route  path='newProjects' Component={NewProjects}/>
        </Route>
        <Route path='/users' element= {<PrivateRoute>
          <Users/>
        </PrivateRoute>} />
        <Route path='/login' Component={Login}/>
        <Route path='/logout' Component={Logout}/>
        <Route path='/users/:userid' Component={UserDetails}/>
        <Route path='*' Component={NotFound}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
