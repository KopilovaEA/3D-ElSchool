<template>
  <div class="home">
    <TopBanner />
    <OurCourses />
    <AboutSchool />
  </div>
</template>

<script>
import TopBanner from "@/components/home/TopBanner.vue";
import OurCourses from "@/components/home/OurCourses.vue";
import AboutSchool from "@/components/home/AboutSchool.vue";
export default {
  name: "HomeView",
  components: {
    TopBanner,
    OurCourses,
    AboutSchool,
  },
};
</script>

<style scoped></style>
