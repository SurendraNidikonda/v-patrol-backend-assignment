import './App.css';
import Home from './Components/Home/home';
import LoginPage from './Components/LoginPage/loginPage';
import {Routes,Route} from 'react-router-dom'
import Shorts from './Components/Shorts';



const App = () => {
  
  return (
    <div className='card'>
      
      <Routes>
          <Route path='/login' Component={LoginPage}/>
          <Route path='/' Component={Home}/>
          <Route path = '/shorts' Component={Shorts}/>
      </Routes>
      
    </div>
  )
}

export default App;
