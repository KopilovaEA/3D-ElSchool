<template>
  <div>
    <h1>НАШИ КУРСЫ</h1>
    <div class="courses">
      <div class="free_course">
        <img src="@/assets/free_course.png" alt="" />
        <div class="courses_text">
          <p class="courses_title">Бесплатный курс</p>
          <p class="courses_description">База для новичков</p>
        </div>
      </div>
      <div class="vip_course">
        <img src="@/assets/vip_course.png" alt="" />
        <div class="courses_text">
          <p class="courses_title">VIP-курс</p>
          <p class="courses_description">Продвинутый</p>
        </div>
        <div class="course_not_available">
          <p class="course_not_available_text">Временно недоступен</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  text-align: left;
  padding-left: 20px;
}

.courses {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 30px;

  height: auto;
  padding: 20px;
}

.free_course,
.vip_course {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.free_course img,
.vip_course img {
  object-fit: cover;
  width: 100%;
  height: 300px;
  z-index: 1;
}
.vip_course {
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}

.courses_text {
  z-index: 1;
  position: absolute;
  left: 20px;
  top: 20px;
  width: calc(100% - 20px);
  height: 30%;
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
  position: absolute;
  bottom: 0;
  left: calc(50%-30px);
  z-index: 1;
  background-color: rgba(255, 240, 106, 0.75);
  width: 70%;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.course_not_available_text {
  font-size: 30px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
}
@media (max-width: 652px) {
  .courses {
    flex-direction: column;
  }
}
</style>
