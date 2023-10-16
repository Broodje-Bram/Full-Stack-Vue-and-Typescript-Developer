<template>
  <div>
    <h1>User Details</h1>
    <div v-if="user">
      <table>
        <tbody>
        <tr>
          <td>ID:</td>
          <td>{{ user.id }}</td>
        </tr>
        <tr>
          <td>First Name:</td>
          <td>{{ user.first_name }}</td>
        </tr>
        <tr>
          <td>Last Name:</td>
          <td>{{ user.last_name }}</td>
        </tr>
        <!-- Add more rows for other user details -->
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>User details not found.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "UserDetail",
  props: ['id'],

  data() {
    return {
      user: null,
    };
  },

  async created() {
    const userId = this.id;
    try {
      const response = await axios.get(`https://app.hirechain.xyz/api/tech-test?code=651984&user_id=${userId}`);
      this.user = response.data;
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  },
};
</script>
