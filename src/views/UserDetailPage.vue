<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold">User Details</h2>
    <div>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <!-- Add more user details as needed -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$data.userData.find(user => user.id === parseInt(this.$route.params.id, 10));
    },
  },
};
</script>
