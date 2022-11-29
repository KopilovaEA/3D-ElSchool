<template>
  <div class="about_school">
    <div class="about_school_left_side">
      <h1 class="about_school_title">О ШКОЛЕ</h1>
      <div class="about_school_text">
        <p>
          Мы - команда профессионалов, которые моделили для ведущих
          застройщиков, студий дизайна и архитектуры, работали над многими
          проектами. Обучим 3D моделированию за месяц! Наши уроки очень понятны,
          наша практика для вас будет интересной.
        </p>
        <p>
          Мы не были довольны контентом, существовавшим в интернете, поэтому
          разработали свою методику, основанную на получении быстрой окупаемости
          обучения и удовольствии от работы.
        </p>
      </div>
    </div>
    <div class="about_school_right_side">
      <div class="about_school_image"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about_school {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 200px;
  padding: 0 20px;
  margin: 60px 0;
}

.about_school_title {
  text-align: left;
  margin-top: 0;
}

.about_school_image {
  background-image: url("@/assets/light.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 500px;
  height: 500px;
}

.about_school_text {
  font-size: 28px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 1.5;
}
</style>
