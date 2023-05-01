<template>
  <div class="home">
    <TopBanner />
    <OurCourses />
    <AboutSchool />
    <div class="teatcher">
      <div class="teatcher_text">
        <span>НАШИ ПРЕПОДАВАТЕЛИ</span>
        <div class="line"></div>
        <div class="work_experience">Опыт работы <span> Более 5 лет</span></div>
      </div>
      <div class="image">
        <img src="@/assets/Ellipse1.png" alt="" />
        <img src="@/assets/Ellipse2.png" alt="" />
        <img src="@/assets/Ellipse3.png" alt="" />
        <img src="@/assets/Ellipse4.png" alt="" />
      </div>
    </div>
    <h1>РАБОТЫ СТУДЕНТОВ</h1>
    <StudentsCarousel />
    <QuestionBanner />
  </div>
</template>

<script>
import TopBanner from "@/components/home/TopBanner.vue";
import OurCourses from "@/components/home/OurCourses.vue";
import AboutSchool from "@/components/home/AboutSchool.vue";
import QuestionBanner from "@/components/header/QuestionBanner.vue";
import StudentsCarousel from "@/components/home/StudentsCarousel.vue";
export default {
  name: "HomeView",
  components: {
    TopBanner,
    OurCourses,
    AboutSchool,
    QuestionBanner,
    StudentsCarousel,
  },
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>

<style scoped>
h1 {
  margin-top: 60px;
  text-align: left;
  padding-left: 20px;
}
.teatcher {
  background-color: #bb8dcd;
  width: auto;
}
.teatcher_text {
  display: flex;
  justify-content: space-between;
  color: #320342;
  text-align: left;
  padding: 20px;
  font-size: 34px;
}
.teatcher_text span {
  font-weight: bold;
}
.image {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 20px 40px 20px;
  gap: 70px;
}
.line {
  width: 1px;
  background-color: #856592;
}
.work_experience {
  display: flex;
  gap: 10px;
}

.image img {
  width: 200px;
  height: 200px;
}

@media (max-width: 800px) {
  .modeller {
    background-color: #949494;
    padding: 20px;
    width: auto;
    height: auto;
    font-size: 28px;
    margin-left: 80px;
    margin-right: 80px;
    border-radius: 90px;
    text-align: center;
    margin-top: 20px;
    transition: all 0.3s ease;
  }
}

@media (max-width: 950px) {
  .teatcher_text {
    flex-direction: column;
    gap: 15px;
  }
  .line {
    display: none;
  }
}

@media (max-width: 500px) {
  .work_experience {
    flex-direction: column;
  }
}
</style>
