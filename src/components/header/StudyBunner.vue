<template>
  <div class="study">
    <div class="study_banner">
      <div>
        <p class="text">Чему <span>научитесь</span></p>
        <!-- <div class="text_two">учитесь</div> -->
        <div class="free_text">Бесплатный курс</div>
      </div>
    </div>
    <div class="banner_middle_line"></div>
    <div class="Freebanner_text">
      <div class="textone">
        <div>Освоите основы 3D моделирования</div>
        <div>
          <p>Добавлять реализма объектам</p>
        </div>
        <div>Создавать простые 3D модели</div>
        <div>Развивать фантазию</div>
        <div>Работать с текстурами</div>
        <div>Кайфовать от своей работы</div>
      </div>
    </div>
    <div class="vip_text">VIP-курс</div>
    <div class="banner_middle_line"></div>
    <div class="vipbanner_text">
      <div class="textone">
        <div>Освоите художественную составляющую, основы 3D моделирования</div>
        <div>
          Качественно и выразительно моделить, делать крутейшие рендеры для
          интерьерной визуализации
        </div>
        <div>
          Делать модели для кино и игр, кайфовать от своих
          качественно-выполненных работ
        </div>
        <div>Делать анимацию и реалистичный рендер</div>
        <div>Узнаете о лайфхаках</div>
        <div>Системно находить клиентов и эффективно продавать свои услуги</div>
      </div>
      <div class="prepod_image">
        <img src="@/assets/Prepod.png" width="250px" height="150px" />
        <p class="textik">
          В обучении вам помогут эксперты. Чтобы вам было легче погрузиться в
          обучение, вы сможете задавать вопросы экспертам и связываться с ними.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.study {
  background-color: #bb8dcd;
  padding: 20px;
  width: calc(100% - 40px);
  height: auto;
  margin-top: 80px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.study_banner {
  font-size: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.text {
  position: relative;
  color: rgb(0, 0, 0);
  font-weight: bold;
  padding-left: 20px;
  padding-right: 10px;
  padding: 20px;
  font-size: 44px;
}
.text span {
  color: #7b4393;
}
.free_text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  font-size: 34px;
}
.vip_text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  margin-top: 100px;
  font-size: 34px;
  text-align: left;
}
.textone {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 40px;
  text-size-adjust: 40px;
  color: black;
}

.textone div {
  width: 300px;
  padding: 10px;
}
.prepod_image {
  margin-top: 20px;
  font-size: 36px;
  margin-bottom: 20px;
  margin-right: 20px;
  position: relative;
  display: flex;
}
.textik {
  margin-top: 15px;
  font-size: 19px;
  color: #7b4393;
  font-weight: bold;
  padding: 20px;
}

.banner_middle_line {
  width: 100%;
  height: 1px;
  background-color: #404040;
  align-self: center;
}
@media (max-width: 632px) {
}
</style>
