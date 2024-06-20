<template>
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home page!</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import { getAuth, signOut } from "firebase/auth";
  
  export default {
    methods: {
      async logout() {
        const auth = getAuth();
        try {
          await signOut(auth);
          this.$router.push('/login');
        } catch (error) {
          console.error("Error logging out:", error);
        }
      }
    }
  };
  </script>
  