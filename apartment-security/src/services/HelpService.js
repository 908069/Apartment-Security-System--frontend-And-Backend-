import axios from 'axios';

const SECURITY_HELP_API_BASE_URL = "http://localhost:8082/springfox/api/owner/domesticHelp";

class HelpService {
    getHelp() {
        return axios.get(SECURITY_HELP_API_BASE_URL);
    }

    createHelp(domesticHelp) {
        return axios.post(SECURITY_HELP_API_BASE_URL, domesticHelp);
    }

    getHelpById(helpId) {
        return axios.get(SECURITY_HELP_API_BASE_URL + '/' + helpId);
    }

    updateHelp(domesticHelp) {
        return axios.put(SECURITY_HELP_API_BASE_URL, domesticHelp);
    }

    deleteHelp(helpId) {
        return axios.delete(SECURITY_HELP_API_BASE_URL + '/' + helpId );
    }
}

export default new HelpService();