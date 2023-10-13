<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold">User List</h1>
    <UserTable @user-data="handleUserData" />
    <div v-if="userData.length > 0">
      <h2 class="text-xl font-semibold mt-4">User Data:</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              First Name
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="user in paginatedData" :key="user.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ user.first_name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4">
        <button @click="previousPage" :disabled="currentPage === 1" class="bg-blue-500 text-white px-4 py-2 mr-2">
          Previous
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-blue-500 text-white px-4 py-2">
          Next
        </button>
      </div>
      <button @click="goToFakeLogin" class="bg-blue-500 text-white px-4 py-2 mt-4">
        Go to Fake Login
      </button>
    </div>
  </div>
</template>

<script>
import UserTable from '@/components/UserTable.vue';
import axios from "axios";

export default {
  name: 'HomePage',
  data() {
    return {
      userData: [],
      itemsPerPage: 10,
      currentPage: 1,
    };
  },
  components: {
    UserTable,
  },
  computed: {
    totalPages() {
      return Math.ceil(this.userData.length / this.itemsPerPage);
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.userData.slice(startIndex, endIndex);
    },
  },
  methods: {
    handleUserData(data) {
      if (data && data.length > 0) {
        this.userData = data;
        this.retryCount = 0; // Reset retry count on successful data load
      } else {
        // Handle error, e.g., data is empty
        if (this.retryCount < this.maxRetries) {
          // Retry if max retries not reached
          this.retryCount++;
          this.fetchUserData(); // Retry by re-fetching the data
        } else {
          // Handle reaching max retry attempts
          console.error('Max retry attempts reached. Unable to load data.');
        }
      }
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
    goToFakeLogin() {
      this.$router.push({ name: "FakeLogin" });
    },
    async fetchUserData() {
      try {
        const response = await axios.get('https://app.hirechain.xyz/api/tech-test?code=651984');

        if (response.status === 200) {
          this.handleUserData(response.data);
        } else {
          // Handle unexpected response status codes here
          console.error(`Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error while fetching user data:', error);
        if (this.retryCount < this.maxRetries) {
          this.retryCount++;
          this.fetchUserData(); // Retry by re-fetching the data
        } else {
          console.error('Max retry attempts reached. Unable to load data.');
        }
      }
    },
  },
  created() {
    // Fetch user data when the component is created
    this.fetchUserData();
  },
};

</script>

<!--This is the code i use for the api but that one doesnt work?-->
<!--<script>-->
<!--import UserTable from '@/components/UserTable.vue';-->
<!--import axios from 'axios';-->

<!--export default {-->
<!--  name: 'HomePage',-->
<!--  data() {-->
<!--    return {-->
<!--      userData: [],-->
<!--      itemsPerPage: 10,-->
<!--      currentPage: 1,-->
<!--    };-->
<!--  },-->
<!--  components: {-->
<!--    UserTable,-->
<!--  },-->
<!--  computed: {-->
<!--    totalPages() {-->
<!--      return Math.ceil(this.userData.length / this.itemsPerPage);-->
<!--    },-->
<!--    paginatedData() {-->
<!--      const startIndex = (this.currentPage - 1) * this.itemsPerPage;-->
<!--      const endIndex = startIndex + this.itemsPerPage;-->
<!--      return this.userData.slice(startIndex, endIndex);-->
<!--    },-->
<!--  },-->
<!--  methods: {-->
<!--    async fetchUserData() {-->
<!--      try {-->
<!--        const response = await axios.get('https://app.hirechain.xyz/api/tech-test?code=651984');-->
<!--        this.userData = response.data; // Assign the received JSON data to userData-->
<!--        this.retryCount = 0; // Reset retry count on successful data load-->
<!--      } catch (error) {-->
<!--        // Handle errors, e.g., data is empty or 500 error-->
<!--        if (this.retryCount < this.maxRetries) {-->
<!--          // Retry if max retries not reached-->
<!--          this.retryCount++;-->
<!--          this.fetchUserData(); // Retry by re-fetching the data-->
<!--        } else {-->
<!--          // Handle reaching max retry attempts-->
<!--          console.error('Max retry attempts reached. Unable to load data.');-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    previousPage() {-->
<!--      if (this.currentPage > 1) {-->
<!--        this.currentPage&#45;&#45;;-->
<!--      }-->
<!--    },-->
<!--    nextPage() {-->
<!--      if (this.currentPage < this.totalPages) {-->
<!--        this.currentPage++;-->
<!--      }-->
<!--    },-->
<!--    goToFakeLogin() {-->
<!--      this.$router.push({ name: 'FakeLogin' });-->
<!--    },-->
<!--  },-->
<!--  created() {-->
<!--    // Fetch user data when the component is created-->
<!--    this.fetchUserData();-->
<!--  },-->
<!--};-->
<!--</script>-->