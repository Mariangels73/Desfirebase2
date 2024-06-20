<template>
    <div>
      <h2>Registrate</h2>
      <form @submit.prevent="signUp">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Contraseña" required />
        <button type="submit">Registrate</button>
      </form>
    </div>
  </template>
  
  <script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async signUp() {
        const auth = getAuth();
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push('/home');
        } catch (error) {
          console.error("Error signing up:", error);
        }
      }
    }
  };
  </script>
  