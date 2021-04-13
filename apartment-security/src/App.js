
import './App.css';

import HomeMenu from './Component/HomeMenu';
import PostFlatdetails from './Registration/PostFlatdetails';
import PostGuardShift from './Registration/PostGuardShift';

import UserRegistration from './Registration/UserRegistration';

import Login from './LoginPage';
import Home from './Home';
import './App.css';
import GetVehicle from './Component/Vehicle/GetVehicle';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ListAlertComponent from './Component/SecurityAlert/ListAlertComponent';
import CreateAlertComponent from './Component/SecurityAlert/CreateAlertComponent';
import UpdateAlertComponent from './Component/SecurityAlert/UpdateAlertComponent';
import ViewAlertComponent from './Component/SecurityAlert/ViewAlertComponent';
import CreateHelpComponent from './Component/DomestisHelp/CreateHelpComponent';
import UpdateHelpComponent from './Component/DomestisHelp/UpdateHelpComponent';
import ListHelpComponent from './Component/DomestisHelp/ListHelpComponent';
import ViewHelpComponent from './Component/DomestisHelp/ViewHelpComponent';
import ListDeliveryComponent from './Component/Delivery/ListDeliveryComponent';
import CreateDeliveryComponent from './Component/Delivery/CreateDeliveryComponent';
import UpdateDeliveryComponent from './Component/Delivery/UpdateDeliveryComponent';
import ViewDeliveryComponent from './Component/Delivery/ViewDeliveryComponent';
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
       <Router>
        
        {/* <HeaderComponent/> */}
        <div className="container">
        
          <Switch>
          {/* <Route path = "/" exact component= {ListDeliveryComponent}></Route>
          <Route path = "/deliveries" component= {ListDeliveryComponent}></Route> 
            <Route path = "/add-delivery" component= {CreateDeliveryComponent}></Route>  
            <Route path = "/update-delivery/:deliveryId" component= {UpdateDeliveryComponent}></Route>
            <Route path = "/view-delivery/:deliveryId" component= {ViewDeliveryComponent}></Route> */}
           {/* <Route path = "/" exact component= {ListHelpComponent}></Route>
          <Route path = "/helps" component= {ListHelpComponent}></Route> 
            <Route path = "/add-help" component= {CreateHelpComponent}></Route>  
            <Route path = "/update-help/:helpId" component= {UpdateHelpComponent}></Route>
            <Route path = "/view-help/:helpId" component= {ViewHelpComponent}></Route> */}
            {/* <Route path = "/" exact component= {ListAlertComponent}></Route>
            <Route path = "/alerts" component= {ListAlertComponent}></Route> 
            <Route path = "/add-alert" component= {CreateAlertComponent}></Route>  
            <Route path = "/update-alert/:id" component= {UpdateAlertComponent}></Route>
            <Route path = "/view-alert/:id" component= {ViewAlertComponent}></Route>              */}
          </Switch> 
        </div>
        {/* <FooterComponent/> */}
    </Router>
          </div>  
  );
}

export default App;
