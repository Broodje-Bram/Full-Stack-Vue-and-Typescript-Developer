<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold">Fake Login Page</h1>
    <p>Please click the fake login button to return to the user list.</p>
    <button @click="returnToUserList" class="bg-blue-500 text-white px-4 py-2 mt-2">
      Fake Login
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    returnToUserList() {
      // Redirect back to the user list page
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
