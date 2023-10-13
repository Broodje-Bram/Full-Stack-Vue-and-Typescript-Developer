<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">User Details</h1>
    <div class="bg-white p-4 rounded-lg shadow-md">
      <div class="mb-4">
        <strong>Name:</strong> {{ user.name }}
      </div>
      <div class="mb-4">
        <strong>Email:</strong> {{ user.email }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      user: {
        name: '',
        email: '',
        // Add more user details fields here
      },
    };
  },
  setup(props, { params }) {
    const userId = params.id;

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://app.hirechain.xyz/api/tech-test/user/${userId}`);
        // Replace 'user' properties with the actual user details received from the API
        this.user = response.data;
      } catch (error) {
        // Handle errors, such as displaying an error message or redirecting
      }
    };

    onMounted(() => {
      fetchUserDetails();
    });

    return {
      userId: this.user,
    };
  },
});
</script>

<style scoped>
</style>