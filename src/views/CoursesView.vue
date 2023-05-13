<template>
  <div class="courses">
    <TopBanner />
    <h1>НАШИ КУРСЫ</h1>
    <div class="free_course">
      <div class="free_courses_text">
        <p class="courses_title">Бесплатный курс</p>
        <p class="courses_description">База для новичков в Blender</p>
      </div>
      <div class="course_availables" @click="goToFreeCourse">
        <p class="course_available_texts">Пройти курс</p>
      </div>
    </div>
    <div class="vip_course">
      <div class="vip_courses_text">
        <p class="courses_title">VIP-курс</p>
        <p class="courses_description">Продвинутый в Blender</p>
      </div>
      <div class="course_not_available" @click="goToPayCourse">
        <p class="course_not_available_text">Пройти курс</p>
      </div>
      <div class="vip_course__image"><p></p></div>
    </div>
    <StudyBunner />
  </div>
</template>

<script>
import TopBanner from "@/components/home/TopBanner.vue";
import StudyBunner from "@/components/header/StudyBunner.vue";
import { API } from "@/http/index.js";
import axios from "axios";
export default {
  name: "CoursesView",
  components: {
    TopBanner,
    StudyBunner,
  },
  methods: {
    async goToFreeCourse() {
      if (window.localStorage.getItem("auth")) {
        try {
          const response = await axios.post(API + "/add_course_to_user", {
            course_id: 3,
            user_id: this.$store.state.id,
          });
          console.log(response.data);
          this.$router.push("/course_free");
        } catch (e) {
          console.log(e);
        }
      } else {
        this.$router.push("/login");
      }
    },
    async goToPayCourse() {
      if (localStorage.getItem("auth")) {
        try {
          const response = await axios.post(API + "/courses", {
            user_id: localStorage.getItem("auth"),
          });
          for (let course of response.data) {
            if (course.id === 4) {
              this.$router.push("/course_vip");
              return;
            }
          }
          this.$router.push("/course_vip_pay");
        } catch (e) {
          console.log(e);
        }
      } else {
        this.$router.push("/login");
      }
    },
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
  height: 100px;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 0.3;
  cursor: pointer;
}
.course_not_available:hover {
  transition: all 0.3s ease;
  transform: scale(1.1);
}
.course_not_available_text {
  color: #000000;
  font-size: 25px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
}
.course_availables {
  background-color: rgba(207, 108, 205, 0.541);
  width: 200px;
  height: 80px;
  position: absolute;
  right: 30px;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}
.course_availables:hover {
  transition: all 0.3s ease;
  transform: scale(1.1);
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

@media screen and (max-width: 500px) {
  .vip_course__image {
    right: 0px;
    background-size: 70px;
    height: 100px;
    width: 55px;
  }
  .course_not_available_text {
    color: #000000;
    font-size: 25px;
    width: 100%;
    text-align: center;
    vertical-align: middle;
  }
}
</style>
