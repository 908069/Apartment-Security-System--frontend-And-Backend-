import axios from 'axios';

const SECURITY_DELIVERY_API_BASE_URL = "http://localhost:8082/springfox/api/owner/delivery";

class DeliveryService {
    getDelivery() {
        return axios.get(SECURITY_DELIVERY_API_BASE_URL);
    }

    createDelivery(delivery) {
        return axios.post(SECURITY_DELIVERY_API_BASE_URL, delivery);
    }

    getDeliveryById(deliveryId) {
        return axios.get(SECURITY_DELIVERY_API_BASE_URL + '/' + deliveryId);
    }

    updateDelivery(delivery) {
        return axios.put(SECURITY_DELIVERY_API_BASE_URL, delivery);
    }

    deleteDelivery(deliveryId) {
        return axios.delete(SECURITY_DELIVERY_API_BASE_URL + '/' + deliveryId);
    }
}

export default new DeliveryService();