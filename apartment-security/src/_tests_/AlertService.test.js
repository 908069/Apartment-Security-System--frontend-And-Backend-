import AlertService from '../services/AlertService.js';
const axios = require('axios');
jest.mock('axios');
describe("testing alert service", () => {
    test("mocking get end point", () => {
    
    const mockedResponse={data:{alert_message:'Visitor arrived'}};
    axios.get.mockResolvedValue(mockedResponse)
    
   
    AlertService.getAlerts();
 
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8082/springfox/api/owner/alert')
})
test("mocking post end point", () => {
    
    const mockedResponse={data:{alert_message:'Visitor arrived'}};
    axios.post.mockResolvedValue(mockedResponse)
    
   
    AlertService.createAlert();
 
    expect(axios.post).toHaveBeenCalled()
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8082/springfox/api/owner/alert',undefined)
})
})