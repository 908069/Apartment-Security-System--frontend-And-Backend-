import axios from 'axios';


// spring boot project in sapient3-workspace, project name: spring-data-jpa-app
const EMPLOYEE_API_BASE_URL = "http://localhost:8081/springfox/api/employees";
//ES6 class
class EmployeeService {
    
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+employeeId,employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }
}

//exporting EmployeeService object
export default new EmployeeService();