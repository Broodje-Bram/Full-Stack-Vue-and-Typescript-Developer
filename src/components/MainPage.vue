<template>
  <div>
    <!-- Your user table and pagination go here -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userData: [],
      // Other data properties for pagination and error handling
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://app.hirechain.xyz/api/tech-test?code=651984');
        if (response.status === 200) {
          // Data parsing and unscrambling logic here
          this.userData = response.data;
        } else {
          // Handle unexpected responses here
        }
      } catch (error) {
        if (error.response.status === 401) {
          // Redirect to a fake login page
          this.$router.push({ name: "FakeLogin" });
        } else if (error.response.status === 500) {
          // Retry the request
          this.userData = data;
        } else {
          console.log(error);
        },
      }
      // Pagination methods
    },
  },
};
</script>
