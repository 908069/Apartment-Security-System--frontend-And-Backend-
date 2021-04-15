import VisitorService from '../services/VisitorService';
const axios = require('axios');
jest.mock('axios');
describe("testing Help service", () => {
    test("mocking get end point", () => {
    
    const mockedResponse={data:{visitor_name:'Mahesh',flat_no:303}};
    axios.get.mockResolvedValue(mockedResponse)
    
   
    VisitorService.getVisitors();
 
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8082/springfox/api/owner/visitor')
})
test("mocking get end point", () => {
    
    const mockedResponse={data:{visitor_name:'Mahesh',flat_no:303}};
    axios.post.mockResolvedValue(mockedResponse)
    
   
    VisitorService.createVisitor();
 
    expect(axios.post).toHaveBeenCalled()
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8082/springfox/api/owner/visitor',undefined)
})

})
