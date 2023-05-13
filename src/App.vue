<template>
  <div>
    <HeaderLayout />
    <main>
      <router-view />
    </main>
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "@/components/header/HeaderLayout.vue";
import FooterLayout from "@/components/footer/FooterLayout.vue";
import { API } from "@/http/index.js";
import axios from "axios";
export default {
  components: { HeaderLayout, FooterLayout },
  async mounted() {
    const response = await axios.post(API + "/user", {
      id: window.localStorage.getItem("auth"),
    });

    console.log("@App", response.data);

    if (!response.data?.message) {
      this.$store.commit("setId", response.data.id);
      this.$store.commit("setName", response.data.name);
      this.$store.commit("setEmail", response.data.email);
      this.$store.commit("setRole", response.data.role);
    }
  },
};
</script>

<style>
#app {
  font-family: sans-serif, Avenir, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

html {
  background-color: #f5f5f5;
}

body {
  margin: 0;
}

main {
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: rgb(201, 68, 245);
  transition: all 0.3s ease;
}

p {
  margin: 0;
  padding: 0;
}
</style>
