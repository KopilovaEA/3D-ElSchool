<template>
  <TopBanner />
  <AboutSchool />
  <div class="jobs">
    <div class="jobs_text">
      <div class="text_jobs_one">
        После прохождения курса 3D моделирования в Blender и выполнения итоговых
        заданий, все получат дипломы.
      </div>
      <div class="text_jobs_two">
        Лучшие ученики смогут получить работу в нашей команде 3D моделлеров!
      </div>
    </div>
    <h1>ВАКАНСИИ</h1>
    <div class="modeller">
      3D - моделлер - специалист, который может строить трехмерные модели,
      преподавать в нашей школе.
    </div>
    <div class="modeller">
      Графический дизайнер - специалист, который разрабатывает элементы графики
      и изображений, оформляет веб-ресурсы, создаёт фирменные стили брендов.
    </div>
    <div class="modeller">
      3D - дженералист - Специалист, который может создавать 3D-изображения,
      визуальные элементы видеоигр.
    </div>
    <div class="modeller">
      Motion designer - специалист создающий 3D модели и их анимацию.
    </div>
    <div class="text">Мы свяжемся с вами, если вы нас заинтересуете ;3</div>
  </div>
  <QuestionBanner />
</template>

<script>
import TopBanner from "@/components/home/TopBanner.vue";
import AboutSchool from "@/components/home/AboutSchool.vue";
import QuestionBanner from "@/components/header/QuestionBanner.vue";
export default {
  name: "JobsView",
  components: { TopBanner, AboutSchool, QuestionBanner },
};
</script>
<style scoped>
h1 {
  text-align: center;
  padding: 20px;
}
.jobs_text {
  background-color: #2b0942;
  padding: 20px;
  width: auto;
  height: 250px;
  margin-top: 40px;
}
.text_jobs_one {
  font-size: 28px;
  text-align: center;
  margin-top: 60px;
  color: rgb(255, 255, 255);
}
.text_jobs_two {
  font-size: 28px;
  text-align: center;
  margin-top: 20px;
  color: #bb8dcd;
}

.modeller {
  background-color: #aeaeae;
  padding: 20px;
  width: auto;
  height: 120px;
  font-size: 28px;
  margin-left: 80px;
  margin-right: 80px;
  border-radius: 90px;
  text-align: center;
  margin-top: 20px;
  transition: all 0.3s ease;
}
.modeller:hover {
  color: #000000;
  background: #bc94cc;
  transition: all 0.3s ease;
  transform: scale(1.1);
  text-align: center;
}

.text {
  font-size: 26px;
  text-align: center;
  margin-top: 20px;
  color: #000000;
  padding: 40px;
}
@media (max-width: 650px) {
  .jobs_text {
    background-color: #2b0942;
    padding: 5px;
    width: auto;
    height: 350px;
    margin-top: 40px;
  }
  .text_jobs_one {
    font-size: 28px;
    text-align: center;
    margin-top: 20px;
    color: rgb(255, 255, 255);
  }
  .text_jobs_two {
    font-size: 28px;
    text-align: center;
    margin-top: 20px;
    color: #bb8dcd;
  }
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
    border-radius: 40px;
    text-align: center;
    margin-top: 20px;
    transition: all 0.3s ease;
  }
}
</style>
