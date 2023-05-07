<template>
  <div class="free">
    <TopBanner />
    <h1>ПРОДВИНУТЫЙ</h1>
    <div class="style_text">
      <p>
        Приветствуем вас на нашем курсе: <span class="prod">Продвинутый</span>.
      </p>
      <p>
        Здесь вы научитесь качественно и выразительно моделить, создавать
        анимацию, узнаете о лайфхаках, поймете как находить клиентов и не
        только...
      </p>
      <p>
        В ходе курса вам необходимо будет изучить статьи, просмотреть видео,
        созвониться с экспертами в zoom(они будут давать вам задания и помогать
        разбираться в них) и выполнить итоговое задание, после проверки которого
        вы получите диплом.
      </p>
      <p class="qvest">
        Если возникнут вопросы, напишите нам!
        <span class="prod">Почта: elSc@gmail.com</span>
      </p>
    </div>
    <img
      class="circle"
      src="@/assets/Ellipse.png"
      alt="Circle"
      width="82"
      height="82"
    />
    <p>
      Каждые понедельник, среду и пятницу в 12:00 по московскому времени
      состоятся созвоны в zoom с экспертами для обсуждения интересующих
      вопросов:
      <a
        class="global"
        target="_blank"
        href="https://zoom.us/j/5551112222#success"
        >zoom</a
      >
    </p>
    <p>Перед просмотром видеоуроков, рекомендуем изучить несколько статей:</p>
    <div class="ssylki">
      <a class="global" target="_blank" href="https://www.turbosquid.com/ru/"
        >3D модели
      </a>
    </div>
    <div class="ssylki">
      <a
        class="global"
        target="_blank"
        href="https://younglinux.info/blender/course"
      >
        Введение в Blender
      </a>
    </div>
    <div class="ssylki">
      <a
        class="global"
        target="_blank"
        href="https://blender3d.com.ua/10-sovetov-dlya-bystroy-raboty-v-blender/"
        >Советы для быстрой работы в Blender
      </a>
    </div>
    <div class="ssylki">
      <a
        class="global"
        target="_blank"
        href="https://younglinux.info/blender/mpractic"
      >
        Введение в анимацию в Blender
      </a>
    </div>
    <img
      class="circle"
      src="@/assets/Ellipse.png"
      alt="Circle"
      width="82"
      height="82"
    />
    <p>
      Урок 1. Основы работы в Blender за 10 минут.
      <iframe
        class="video"
        src="https://www.youtube.com/embed/h0th3K4Hkc8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </p>
    <p>
      Урок 2. Красивая анимация в Blender за 20 минут.
      <iframe
        class="video"
        src="https://www.youtube.com/embed/XYYZMe1_AW0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </p>
    <p>
      Урок 3. Тренируемся - создаем пончик.
      <iframe
        class="video"
        src="https://www.youtube.com/embed/IjuClfr8SYA"
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
      Урок 4. Тренируемся - создаем банку.
      <iframe
        class="video"
        src="https://www.youtube.com/embed/rkEvjNP2bkE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </p>
    <p>
      Урок 5. Тренируемся - создаем комнатку.
      <iframe
        class="video"
        src="https://www.youtube.com/embed/8XZQhLRQTDw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </p>
    <p>
      Урок 6. Топ лайфхаков.
      <iframe
        class="video"
        src="https://www.youtube.com/embed/7jVHtx6m2xs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </p>
    <p>
      Урок 7. Как и сколько можно заработать на 3D.
      <iframe
        class="video"
        src="https://www.youtube.com/embed/6Wez5YAxqPc"
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
  name: "CourseVipView",
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
  outline: 4px dashed #fe4c9971;
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
.prod {
  color: #e5168e;
}
.qvest {
  color: rgb(52, 52, 108);
}
.ssylki {
  text-align: left;
  padding-left: 20px;
  font-weight: bold;
  font-size: 24px;
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
