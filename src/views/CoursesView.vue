<template>
  <div class="courses">
    <TopBanner />
    <h1>НАШИ КУРСЫ</h1>
    <div class="free_course">
      <div class="free_courses_text">
        <p class="courses_title">Бесплатный курс</p>
        <p class="courses_description">База для новичков в Blender</p>
      </div>
      <div class="course_availables">
        <router-link to="/coursefree">
          <p class="course_available_texts">Пройти курс</p>
        </router-link>
      </div>
    </div>
    <div class="vip_course">
      <div class="vip_courses_text">
        <p class="courses_title">VIP-курс</p>
        <p class="courses_description">Продвинутый в Blender</p>
      </div>
      <div class="course_not_available">
        <p class="course_not_available_text">Временно недоступен</p>
      </div>
      <div class="vip_course__image"><p></p></div>
    </div>
    <StudyBunner />
  </div>
</template>

<script>
import TopBanner from "@/components/home/TopBanner.vue";
import StudyBunner from "@/components/header/StudyBunner.vue";
export default {
  name: "CoursesView",
  components: {
    TopBanner,
    StudyBunner,
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
  padding-left: 20px;
}

.courses {
  align-items: center;
  justify-content: center;
  gap: 30px;

  height: 100%;
  width: 100%;
}

.free_course,
.vip_course {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
}

.free_course {
  background-image: url("@/assets/Kurs.png");
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}
.vip_course {
  margin-top: 30px;
  background-image: url("@/assets/Kurs2.png");
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}
.vip_course__image {
  background-image: url("@/assets/i.png");
  position: absolute;
  top: 20px;
  right: 50px;
  background-size: 128px;
  height: 190px;
  width: 125px;
}

.free_courses_text {
  position: absolute;
  border-radius: 45px;
  left: 20px;
  top: 20px;
  background-color: #29202cc3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
.vip_courses_text {
  position: absolute;
  border-radius: 45px;
  left: 20px;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

p {
  color: #e6e6e6;
  text-align: left;
}

.courses_title,
.courses_description {
  text-align: left;
}

.courses_title {
  font-size: 30px;
  font-weight: bold;
}

.courses_description {
  font-size: 24px;
}

.course_not_available {
  background-color: rgba(207, 108, 206, 0.75);
  width: 400px;
  height: 120px;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 0.3;
}

.course_not_available_text {
  color: #000000;
  font-size: 30px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
}
.course_availables {
  background-color: rgba(207, 108, 205, 0.599);
  width: 11%;
  height: 80px;
  position: absolute;
  right: 30px;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 50px;
}

.course_available_texts {
  color: #000000;
  font-size: 20px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
}
.study_image {
  position: relative;
  margin-top: 80px;
  margin-bottom: 80px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
@media screen and (max-width: 1200px) {
  .course_availables {
    padding-right: 40px;
  }
}

@media screen and (max-width: 500px) {
  .vip_course__image {
    right: 0px;
    background-size: 70px;
    height: 100px;
    width: 55px;
  }
  .course_availables {
    padding-right: 60px;
  }
}
</style>
