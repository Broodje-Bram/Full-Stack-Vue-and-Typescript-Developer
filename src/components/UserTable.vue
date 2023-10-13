<template>
  <div>
    <!-- Your table rendering code -->
    <button @click="sendUserData">Send User Data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [
        // Sample user data
        { first_name: 'User 1', email: 'User1@mail.com' },
        { first_name: 'User 2', email: 'User2@mail.com' },
        { first_name: 'User 3', email: 'User3@mail.com' },
        { first_name: 'User 4', email: 'User4@mail.com' },
        { first_name: 'User 5', email: 'User5@mail.com' },
        { first_name: 'User 6', email: 'User6@mail.com' },
        { first_name: 'User 7', email: 'User7@mail.com' },
        { first_name: 'User 8', email: 'User8@mail.com' },
        { first_name: 'User 9', email: 'User9@mail.com' },
        { first_name: 'User 10', email: 'User10@mail.com' },
        { first_name: 'User 11', email: 'User11@mail.com' },
        { first_name: 'User 12', email: 'User12@mail.com' },
        { first_name: 'User 13', email: 'User13@mail.com' },
        { first_name: 'User 14', email: 'User14@mail.com' },
        { first_name: 'User 15', email: 'User15@mail.com' },
        { first_name: 'User 16', email: 'User16@mail.com' },
        { first_name: 'User 17', email: 'User17@mail.com' },
        { first_name: 'User 18', email: 'User18@mail.com' },
        { first_name: 'User 19', email: 'User19@mail.com' },
        { first_name: 'User 20', email: 'User20@mail.com' },
        { first_name: 'User 21', email: 'User21@mail.com' },

      ],
    };
  },
  methods: {
    sendUserData() {
      // Emit the 'user-data' event with the user data
      this.$emit('user-data', this.userData);
    },
  },
};
</script>
