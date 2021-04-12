
import './App.css';

import HomeMenu from './Component/HomeMenu';
import PostFlatdetails from './Registration/PostFlatdetails';
import PostGuardShift from './Registration/PostGuardShift';
import PostVehicle from './Registration/PostVehicle';
import UserRegistration from './Registration/UserRegistration';
import {Route,Switch} from 'react-router-dom'
import Login from './LoginPage';
import Home from './Home';

function App() {
  return (  
    <div className="App">
      <HomeMenu/>
    
      <Switch>
        
      <Route exact path='/' component={Home}/>
        <Route path='/registration' component={UserRegistration}/>
        <Route path='/login' component={Login}/>
        <Route path='/addflatdetails' component={PostFlatdetails}/>
        <Route path='/addGuardShift' component={PostGuardShift}/>
      </Switch>
    </div>  
  );
}

export default App;
