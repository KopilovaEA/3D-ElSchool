<template>
  <TopBanner />
  <AboutSchool />
  <div class="jobs">
    <div class jobs>
      <p class="text_jobs_one">
        После прохождения наших курсов и выполнения итоговых заданий, все
        получат дипломы.
      </p>
      <p class="text_jobs_two">
        Лучшие ученики смогут получить работу в нашей команде 3D моделлеров!
      </p>
    </div>
  </div>
  <h1>ВАКАНСИИ</h1>
  <div class="modeller">
    3D - моделлер - специалист, который может строить трехмерные модели,
    преподавать в нашей школе.
  </div>
  <div class="modeller">
    Графический дизайнер - специалист, который разрабатывает элементы графики и
    изображений, оформляет веб-ресурсы, создаёт фирменные стили брендов.
  </div>
  <div class="modeller">
    3D - дженералист - Специалист, который может создавать художественные
    3D-изображения, визуальные элементы видеоигр.
  </div>
  <div class="modeller">
    Motion designer - специалист создающий 3D модели и их анимацию.
  </div>
  <div class="text">Мы свяжемся с вами, если вы нас заинтересуете ;3</div>
</template>

<script>
import TopBanner from "@/components/home/TopBanner.vue";
import AboutSchool from "@/components/home/AboutSchool.vue";
export default {
  name: "JobsView",
  components: { TopBanner, AboutSchool },
};
</script>
<style scoped>
h1 {
  text-align: left;
  margin-left: 30px;
  padding: 20px;
}
.jobs {
  background-color: #2b0942;
  padding: 20px;
  width: auto;
  height: 250px;
  margin-top: 40px;
  display: flex;
}
.text_jobs_one {
  font-size: 34px;
  text-align: center;
  margin-top: 60px;
  color: rgb(255, 255, 255);
}
.text_jobs_two {
  font-size: 36px;
  text-align: center;
  margin-top: 20px;
  color: #bb8dcd;
}

.modeller {
  background-color: #949494;
  padding: 20px;
  width: auto;
  height: 150px;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 70px;
  border-radius: 70px;
  font-size: 36px;
  text-align: center;
  margin-top: 20px;
  transition: all 0.3s ease;
}
.modeller:hover {
  color: #000000;
  background: #8a6598;
  transition: all 0.3s ease;
  transform: scale(1.1);
  text-align: center;
}

.text {
  font-size: 36px;
  text-align: center;
  margin-top: 20px;
  color: #000000;
  padding: 40px;
}
</style>
