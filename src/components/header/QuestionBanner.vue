<template>
  <div class="questions">
    <div class="about_school_left_side">
      <h1 class="question_title">ПОЯВИЛИСЬ ВОПРОСЫ О ШКОЛЕ?</h1>
      <div class="question_text">
        <p>
          Отправь вопрос нам на почту
          <span class="style_gmail">elSc@gmail.com</span>. Мы свяжемся с тобой,
          чтобы ответить на него!
        </p>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLpRBDnrqpBzcZFlJFnpgGbSjhBWSSCZHzGpSNnwFCFgMDzTQRxtsZjqXdtBQHTrfNWqq"
          target="_blank"
          ><button class="button_message">Написать</button></a
        >
      </div>
    </div>
    <div class="about_school_right_side">
      <div class="question_image">
        <img src="@/assets/messege.png" alt="" width="100%" height="450px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.questions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  margin-top: 40px;
}
.style_gmail {
  color: #a554ca;
}
.question_title {
  text-align: left;
  margin-top: 0;
}

.question_image img {
  object-fit: cover;
  z-index: 1;
}

.question_text {
  font-size: 28px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 40px;
  line-height: 1.5;
  margin-right: 90px;
}
.button_message {
  width: 200px;
  height: 50px;
  font-size: 20px;
  background-color: #fff06a;
  border: 0;
  border-radius: 5px;
}
.button_message:hover {
  transition: all 0.3s ease;
  transform: scale(1.1);
  background: linear-gradient(
    120deg,
    rgb(235, 255, 103),
    rgb(255, 239, 99),
    rgba(0, 119, 255, 0.289)
  );
}

@media (max-width: 1260px) {
  .questions {
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 500px) {
  .question_text {
    text-align: center;
    margin-left: 80px;
  }
  .question_title {
    text-align: center;
    font-size: 36px;
  }
}
</style>
