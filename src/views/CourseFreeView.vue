<template>
  <div class="blog">
    <TopBanner />
    <h1>БАЗА ДЛЯ НОВИЧКОВ</h1>
    <p class="style_text">
      Приветствуем вас на нашем курсе: База для новичков. Здесь вы научитесь
      создавать простые 3D - модели. В ходе курса вам необходимо изучить статьи,
      просмотреть видео, созвониться с экспертами в zoom и выполнить задание,
      после проверки которого вы получите диплом. Если возникнут вопросы,
      напишите нам!
    </p>
    <img
      class="circle"
      src="@/assets/Ellipse.png"
      alt="Circle"
      width="82"
      height="82"
    />
    <p>
      Каждую пятницу в 12:00 по москвскому времени состоятся созвоны в zoom с
      экспертами, для обсуждения интересующих вопросов:
      <a
        class="global"
        target="_blank"
        href="https://zoom.us/j/5551112222#success"
        >zoom</a
      >
    </p>
    <p>
      Перед просмотром видеоуроков, рекомендуем изучить статью:
      <a
        class="global"
        target="_blank"
        href="https://younglinux.info/blender/course"
      >
        Введение в Blender
      </a>
    </p>
    <img
      class="circle"
      src="@/assets/Ellipse.png"
      alt="Circle"
      width="82"
      height="82"
    />
    <p>
      Урок 1. Установка, интерфейс, навигация, добавление и основные операции с
      объектами
      <iframe
        class="video"
        src="https://www.youtube.com/embed/5NRU4KRtVH0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </p>
    <img
      class="circle"
      src="@/assets/Ellipse.png"
      alt="Circle"
      width="82"
      height="82"
    />
    <p>
      Урок 2. Основы моделирования (деструктивный и процедурный подход)
      <iframe
        class="video"
        src="https://www.youtube.com/embed/uWLQjDaCf0Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </p>
    <img
      class="circle"
      src="@/assets/Ellipse.png"
      alt="Circle"
      width="82"
      height="82"
    />
    <p>
      Урок 3. Начинается магия. Структура объектов
      <iframe
        class="video"
        src="https://www.youtube.com/embed/yxqEpOQdp1Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </p>
    <img
      class="circle"
      src="@/assets/Ellipse.png"
      alt="Circle"
      width="82"
      height="82"
    />
    <p>
      Урок 4. Материалы
      <iframe
        class="video"
        src="https://www.youtube.com/embed/diE5R4Qzf0Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </p>
    <img
      class="circle"
      src="@/assets/Ellipse.png"
      alt="Circle"
      width="82"
      height="82"
    />
    <p>
      Урок 5. Создаем тропическую сцену
      <iframe
        class="video"
        src="https://www.youtube.com/embed/CsNgljHnbhA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </p>
    <div class="buttonys">
      <a
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfWzERr8YKzWsba4po4Eyt4-UxfytJ4JMDGhLOn0TFEeGO6GA/viewform?vc=0&c=0&w=1&flr=0"
      >
        <button class="button">Выполнить задание</button>
      </a>
    </div>
  </div>
</template>

<script>
import TopBanner from "@/components/home/TopBanner.vue";
export default {
  name: "BlogView",
  components: { TopBanner },
};
</script>
<style scoped>
h1 {
  text-align: left;
  padding-left: 20px;
}
p {
  text-align: left;
  padding-left: 20px;
  color: #000000;
  font-size: 29px;
  padding: 20px;
}
a {
  color: #0377b1;
  text-decoration: none;
}
a:visited {
  color: #50009b;
}
a:hover {
  color: #ff94f3;
  text-decoration: underline;
}
.image {
  object-fit: cover;
}

.circle {
  display: flex;
  top: 0;
  left: 0;
  padding: 20px;
}
.video {
  display: flex;
  width: 100%;
  height: 800px;
  top: 20px;
  object-fit: cover;
}
.style_text {
  /* border: 5px solid #9932cc2d; */
  outline: 4px dashed #8b1f8b35;
  outline-offset: -10px;
}
.buttonys {
  padding: 20px;
}
.button {
  width: 500px;
  height: 70px;
  font-size: 20px;
  color: black;
  background-color: #c435dda7;
  border: 0;
  border-radius: 5px;
}
.button:hover {
  transition: all 0.3s ease;
  transform: scale(1.1);
  background: linear-gradient(
    120deg,
    #e96aff93,
    #e96aff93,
    rgba(255, 119, 155, 0.833)
  );
}
@media (max-width: 540px) {
  .video {
    display: flex;
    width: 100%;
    height: 200px;
    top: 20px;
    object-fit: cover;
  }
  .button {
    width: 100%;
    height: 70px;
    font-size: 20px;
    color: black;
    background-color: #e96aff93;
    border: 0;
    border-radius: 5px;
  }
}
</style>
