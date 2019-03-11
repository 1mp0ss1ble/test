import axios from 'axios';

const api = {
  tournaments : {
    get : () => axios.get('api/tournaments/')
  }
}

export default api; 