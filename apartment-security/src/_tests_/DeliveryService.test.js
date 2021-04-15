import DeliveryService from '../services/DeliveryService';
const axios = require('axios');
jest.mock('axios');
describe("testing Delivery service", () => {
    test("mocking get end point", () => {
    
    const mockedResponse={data:{person_name:'Mahesh'}};
    axios.get.mockResolvedValue(mockedResponse)
    
   
    DeliveryService.getDelivery();
 
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8082/springfox/api/owner/delivery')
})

})