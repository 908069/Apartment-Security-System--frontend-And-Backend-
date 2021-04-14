import axios from 'axios';

const SECURITY_VISITOR_API_BASE_URL = "http://localhost:8082/springfox/api/owner/visitor";

class VisitorService {
    getVisitors() {
        return axios.get(SECURITY_VISITOR_API_BASE_URL);
    }

    createVisitor(visitor) {
        return axios.post(SECURITY_VISITOR_API_BASE_URL, visitor);
    }

    getVisitorById(visitorId) {
        return axios.get(SECURITY_VISITOR_API_BASE_URL + '/' + visitorId);
    }

    updateVisitor(visitor) {
        return axios.put(SECURITY_VISITOR_API_BASE_URL, visitor);
    }

    deleteVisitor(visitorId) {
        return axios.delete(SECURITY_VISITOR_API_BASE_URL + '/' + visitorId);
    }
}

export default new VisitorService();