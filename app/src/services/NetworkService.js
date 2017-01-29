// import config from './config';
import axios from 'axios';
export default {
 /* getHosts: () => [
    { ip_addr: '127.0.0.1', hw_addr: 'aa:bb:cc:dd', first_seen: new Date(), last_seen: new Date(), name: 'localhost' },
    { ip_addr: '192.168.1.1', hw_addr: 'aa:bb:cc:de', first_seen: new Date(), last_seen: new Date(), name: 'router' },
  ],*/
  getHosts: () => {
    return axios.get('/hosts');
  }, 
};
