<template>
  <div class="p-4">
    <pagination />
<!--    <UserTable @user-data="handleUserData" />-->

  </div>
</template>

<!--This is the code i use for the api but that one doesnt work?-->
<script>
import UserTable from '@/components/UserTable.vue';
import pagination from "@/components/Pagination.vue";

export default {
  name: 'HomePage',
  components: {
    pagination,
    // UserTable,
  },
};
</script>