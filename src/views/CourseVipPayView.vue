<template>
  <div class="vippay">
    <TopBanner />
    <h1>ПРОДВИНУТЫЙ В BLENDER</h1>
    <p class="pay">Стоимость курса: 20 000 руб.</p>
    <div class="style_text_pay">
      <p>
        Для прохождения курса: Продвинутый в Blender, необходимо внести оплату
        по номеру телефона <span class="number">+7 (924) 556-78-79</span>
      </p>
      <p class="message">
        При оплате в сообщении напишите свою почту, ФИО, имя в профиле и курс.
      </p>
      <p>После оплаты и подтверждения менеджера, курс будет доступен.</p>
    </div>
    <img class="image_pay" src="@/assets/payvip.jpg" alt="image" />
  </div>
</template>

<script>
import TopBanner from "@/components/home/TopBanner.vue";
export default {
  name: "CourseVipPayView",
  components: { TopBanner },
};
</script>
<style scoped>
h1 {
  text-align: left;
  padding-left: 20px;
}
.pay {
  font-size: 24px;
  font-weight: bold;
  color: rgb(53, 0, 102);
  text-align: left;
  padding-left: 20px;
}
.message {
  padding: 10px;
  font-weight: bold;
}
.image_pay {
  width: 600px;
  height: 600px;
}
.style_text_pay {
  outline: 4px dashed #ff96fc;
  outline-offset: -10px;
  padding: 20px;
  font-size: 20px;
}
.number {
  font-size: 24px;
}
.number:hover {
  color: #d23d99;
  text-decoration: underline;
}
@media screen and (max-width: 650px) {
  .image_pay {
    width: 100%;
    height: 100%;
  }
}
</style>
