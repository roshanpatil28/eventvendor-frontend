import axios from 'axios';

const API_URL = 'http://localhost:8089/api/tents/';

class TentService {
  getAllTents() {
    return axios.get(API_URL);
  }

  getTentById(tentId) {
    return axios.get(API_URL + tentId);
  }

  addTent(tent) {
    return axios.post(API_URL, tent);
  }

  updateTent(tentId, tent) {
    return axios.put(API_URL + tentId, tent);
  }

  deleteTent(tentId) {
    return axios.delete(API_URL + tentId);
  }
}

const tentService = new TentService();
export default tentService;