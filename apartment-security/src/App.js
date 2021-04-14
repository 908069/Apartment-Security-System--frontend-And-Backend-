
import './App.css';

import HomeMenu from './Component/HomeMenu';
import PostFlatdetails from './Registration/PostFlatdetails';
import PostGuardShift from './Registration/PostGuardShift';

import UserRegistration from './Registration/UserRegistration';

import Login from './LoginPage';
import Home from './Home';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

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
import ListVisitorComponent from './Component/Visitors/ListVisitorComponent';
import CreateVisitorComponent from './Component/Visitors/CreateVisitorComponent';
import UpdateVisitorComponent from './Component/Visitors/UpdateVisitorComponent';
import ViewVisitorComponent from './Component/Visitors/ViewVisitorComponent';
import ListVehicleComponent from './Component/Vehicle/ListVehicleComponents';
import CreateVehicleComponent from './Component/Vehicle/CreateVehicleComponent';
import UpdateVehicleComponent from './Component/Vehicle/UpdateVehicleComponent';
import ViewVehicleComponent from './Component/Vehicle/ViewVehicleComponent';
import OwnerLoginMenu from './Component/LoginOwner';
import GuardLoginMenu from './Component/GuardLoginMenu';
function App() {
  return (  
    <div className="App">
      
    <HomeMenu/>
    
      <Switch>
        
      <Route exact path='/' component={Home}/>
        <Route exact path='/registration' component={UserRegistration}/>
        <Route path='/login' component={Login}/>
        <Router path='/ownerlogin' component={OwnerLoginMenu}/>
        <Router path='/guardlogin' component={GuardLoginMenu}/>
        <Route path='/addflatdetails' component={PostFlatdetails}/>
        <Route path='/addGuardShift' component={PostGuardShift}/>
    </Switch>  
    
       
       
        {/* <HeaderComponent/> */}
        <div className="container">
        
          <Switch>
              <Route path = "/visitors" component= {ListVisitorComponent}></Route> 
              <Route path = "/add-visitor" component= {CreateVisitorComponent}></Route>  
              <Route path = "/update-visitor/:id" component= {UpdateVisitorComponent}></Route>
              <Route path = "/view-visitor/:id" component= {ViewVisitorComponent}></Route>
              <Route path = "/vehicles" component= {ListVehicleComponent}></Route> 
              <Route path = "/add-vehicle" component= {CreateVehicleComponent}></Route>  
              <Route path = "/update-vehicle/:id" component= {UpdateVehicleComponent}></Route>
              <Route path = "/view-vehicle/:id" component= {ViewVehicleComponent}></Route> 






          {/* <Route path = "/" exact component= {ListDeliveryComponent}></Route> */}
          <Route path = "/deliveries" component= {ListDeliveryComponent}></Route> 
            <Route path = "/add-delivery" component= {CreateDeliveryComponent}></Route>  
            <Route path = "/update-delivery/:deliveryId" component= {UpdateDeliveryComponent}></Route>
            <Route path = "/view-delivery/:deliveryId" component= {ViewDeliveryComponent}></Route> 
           {/* <Route path = "/" exact component= {ListHelpComponent}></Route> */}
          <Route path = "/helps" component= {ListHelpComponent}></Route> 
            <Route path = "/add-help" component= {CreateHelpComponent}></Route>  
            <Route path = "/update-help/:helpId" component= {UpdateHelpComponent}></Route>
            <Route path = "/view-help/:helpId" component= {ViewHelpComponent}></Route> 
            {/* <Route path = "/" exact component= {ListAlertComponent}></Route> */}
            <Route path = "/alerts" component= {ListAlertComponent}></Route> 
            <Route path = "/add-alert" component= {CreateAlertComponent}></Route>  
            <Route path = "/update-alert/:id" component= {UpdateAlertComponent}></Route>
            <Route path = "/view-alert/:id" component= {ViewAlertComponent}></Route>              
          </Switch> 
        </div>
        {/* <FooterComponent/> */}
 
          </div>  
  );
}

export default App;
