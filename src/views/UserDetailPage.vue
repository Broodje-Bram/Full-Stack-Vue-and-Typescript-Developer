<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold">User Details</h2>
    <userDetail/>
  </div>
</template>

<script>
import userDetail from "@/components/UserDetail.vue";


export default {
  components: {
    userDetail,
  },
  computed: {
    user() {
      return this.$data.userData.find(user => user.id === parseInt(this.$route.params.id, 10));
    },
  },
};
</script>
