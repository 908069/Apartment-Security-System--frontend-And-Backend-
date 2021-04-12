import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <h1>Hello World!</h1>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent/>
          <div className="container">
            <switch>
              <Route path = "/" exact component= {ListEmployeeComponent}></Route>
              <Route path = "/employees" component= {ListEmployeeComponent}></Route> 
              <Route path = "/add-employee" component= {CreateEmployeeComponent}></Route>  
              <Route path = "/update-employee/:id" component= {UpdateEmployeeComponent}></Route>
              <Route path = "/view-employee/:id" component= {ViewEmployeeComponent}></Route>             
            </switch>
          </div>
          <FooterComponent/>
       
      </Router>
    </div>
   
    
  );
}

export default App;
