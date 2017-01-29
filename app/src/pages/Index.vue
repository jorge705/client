<template>
  <div class="index">
   <networkRadar></networkRadar>
  </div>
</template>

<script>
import axios from 'axios';
import NetworkRadar from '../components/NetworkRadar';

this.NativeStorage.getItem('backend_ip', (ip) => {
  axios.defaults.baseURL = `https://${ip}:9915`;
}, () => {
  this.Vue.router.push('settings');
});

this.NativeStorage.getItem('backend_user', (user) => {
  axios.defaults.auth.username = user;
}, () => {
  this.Vue.router.push('settings');
});

this.NativeStorage.getItem('backend_password', (pass) => {
  axios.defaults.auth.password = pass;
}, () => {
  this.Vue.router.push('settings');
});

export default {
  name: 'index',
  components: {
    NetworkRadar,
  },
  data() {
    return {
      msg: 'cSploit',
    };
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
