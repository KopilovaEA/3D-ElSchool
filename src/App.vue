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
export default { components: { HeaderLayout, FooterLayout } };
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
