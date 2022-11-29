<template>
  <div class="home">
    <TopBanner />
    <OurCourses />
    <AboutSchool />
    <FooterLayout />
  </div>
</template>

<script>
import TopBanner from "@/components/home/TopBanner.vue";
import OurCourses from "@/components/home/OurCourses.vue";
import AboutSchool from "@/components/home/AboutSchool.vue";
import FooterLayout from "@/components/home/FooterLayout.vue";
export default {
  name: "HomeView",
  components: {
    TopBanner,
    OurCourses,
    AboutSchool,
    FooterLayout,
  },
};
</script>

<style scoped></style>
