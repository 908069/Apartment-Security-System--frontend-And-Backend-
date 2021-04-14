import axios from 'axios';

const SECURITY_VEHICLE_API_BASE_URL = "http://localhost:8082/springfox/api/owner/vehicle";

class VehicleService {
    getVehicles() {
        return axios.get(SECURITY_VEHICLE_API_BASE_URL);
    }

    createVehicle(vehicle) {
        return axios.post(SECURITY_VEHICLE_API_BASE_URL, vehicle);
    }

    getVehicleById(vehicleId) {
        return axios.get(SECURITY_VEHICLE_API_BASE_URL + '/' + vehicleId);
    }

    updateVehicle(vehicle) {
        return axios.put(SECURITY_VEHICLE_API_BASE_URL, vehicle);
    }

    deleteVehicle(vehicleId) {
        return axios.delete(SECURITY_VEHICLE_API_BASE_URL + '/' + vehicleId);
    }
}

export default new VehicleService();