<template>
  <div class="pagination">
    <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit("page-change", this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit("page-change", this.currentPage + 1);
      }
    },
  },
};
</script>
