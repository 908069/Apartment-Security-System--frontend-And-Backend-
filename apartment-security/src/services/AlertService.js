import axios from 'axios';

const SECURITY_ALERT_API_BASE_URL = "http://localhost:8082/springfox/api/owner/alert";

class AlertService {
    getAlerts() {
        return axios.get(SECURITY_ALERT_API_BASE_URL);
    }

    createAlert(alert) {
        return axios.post(SECURITY_ALERT_API_BASE_URL, alert);
    }

    getAlertById(alertId) {
        return axios.get(SECURITY_ALERT_API_BASE_URL + '/' + alertId);
    }

    updateAlert(alert) {
        return axios.put(SECURITY_ALERT_API_BASE_URL, alert);
    }

    deleteAlert(alertId) {
        return axios.delete(SECURITY_ALERT_API_BASE_URL + '/' + alertId);
    }
}

export default new AlertService();