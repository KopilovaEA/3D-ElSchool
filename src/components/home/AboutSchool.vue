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
      <div class="about_school_image">
        <img src="@/assets/light.png" alt="" />
      </div>
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
  gap: 20px;
  padding: 0 20px;
  margin: 60px 0;
}

.about_school_title {
  text-align: left;
  margin-top: 0;
}

.about_school_image img {
  object-fit: cover;
  width: auto;
  height: 400px;
  z-index: 1;
}

.about_school_text {
  font-size: 28px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 1.5;
}

@media (max-width: 1260px) {
  .about_school {
    flex-direction: column;
    align-items: center;
  }
}
</style>
