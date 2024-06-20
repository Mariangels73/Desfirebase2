<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li v-if="!user"><router-link to="/signup">Registrate</router-link></li>
        <li v-if="!user"><router-link to="/login">Ingresa</router-link></li>
        <li v-if="user"><a href="#" @click.prevent="logout">Salir</a></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: 'App',
  data() {
    return {
      user: null
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
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

<style>
/* Estilos de navegación */
nav {
  padding: 1em;
  background-color: #35495e;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  margin-right: 1em;
}

nav a {
  text-decoration: none;
  color: #fff;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

/* Estilos generales */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h2 {
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #35495e;
}
</style>
