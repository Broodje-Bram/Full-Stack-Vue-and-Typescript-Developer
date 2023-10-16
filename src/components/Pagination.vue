<template>
  <div class="bg-gray-900 text-white p-4">
    <h1 class="text-2xl font-semibold mb-4">User List</h1>
    <div class="overflow-x-auto">
      <table class="table-fixed w-full bg-white text-gray-900">
        <thead class="bg-blue-500 text-white">
        <tr>
          <th class="w-1/6 py-2 px-4">ID</th>
          <th class="w-1/6 py-2 px-4">First Name</th>
          <th class="w-2/3 py-2 px-4">Last Name</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(user) in displayedUsers"
            :key="user.id"
            @click="showUserDetails(user.id)"
            class="hover:bg-gray-100 cursor-pointer transition duration-300"
        >
          <td class="py-4 px-4">{{ user.id }}</td>
          <td class="py-4 px-4">{{ user.first_name }}</td>
          <td class="py-4 px-4">{{ user.last_name }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Previous
      </button>
      <span class="text-lg font-semibold"> {{currentPage }} / {{ totalPages }}</span>
      <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "paginationList",
  data() {
    return {
      apiData: {
        success: false,
        data: [],
      },
      currentPage: 1,
      perPage: 10,
      retryCount: 0, // Initialize retryCount
      maxRetries: 3, // Define the maximum number of retries
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.apiData.data.length / this.perPage);
    },
    displayedUsers() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.apiData.data.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      axios
          .get('https://app.hirechain.xyz/api/tech-test?code=651984')
          .then((response) => {
            this.apiData = response.data;
            console.log(response.data);
          })
          .catch((error) => {
            // Handle errors, e.g., data is empty or 500 error
            if (this.retryCount < this.maxRetries) {
              // Retry if max retries not reached
              this.retryCount++;
              this.fetchUserData(); // Retry by re-fetching the data
            } else if (error.response.status === 401) {
              // Redirect to a fake login page
              this.$router.push({ name: "FakeLogin" });
            } else {
              // Handle reaching max retry attempts
              console.error('Max retry attempts reached. Unable to load data.');
            }
          });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    showUserDetails(userId) {
      // Implement the user details route navigation
      this.$router.push({ name: 'userDetail', params: { id: userId } });
      console.log(`Display user details for user ID: ${userId}`);
    },
  },
};
</script>