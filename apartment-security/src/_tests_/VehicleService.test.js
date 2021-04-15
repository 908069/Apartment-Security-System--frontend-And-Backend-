import VehicleService from '../services/VehicleService';
const axios = require('axios');
jest.mock('axios');
describe("testing Delivery service", () => {
    test("mocking get end point", () => {
    
    const mockedResponse={data:{ vehicle_no:'AP234869',basement_level:3,parking_no:304,vehicle_type:'sedan'}};
    axios.get.mockResolvedValue(mockedResponse)
    
   
    VehicleService.getVehicles();
 
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8082/springfox/api/owner/vehicle')
})


})