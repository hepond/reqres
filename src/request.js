import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reqres.in/api/users',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance;