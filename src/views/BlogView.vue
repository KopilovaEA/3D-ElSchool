<template>
  <div class="blog">
    <TopBanner />
    <h1>БЛОГ</h1>
    <div class="icon">
      <img
        class="circle"
        src="@/assets/Ellipse.png"
        alt="Circle"
        width="82"
        height="82"
      />
      <p>
        Рекомендуем посмотреть видео: Что такое 3D моделирование? ( Zhukov3D )
      </p>
      <div>
        <iframe
          class="video"
          src="https://www.youtube.com/embed/-m8zejlAzb4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <img
      class="circle"
      src="@/assets/Ellipse.png"
      alt="Circle"
      width="82"
      height="82"
    />
    <p>
      Рекомендуем подписаться на наш Telegram канал, чтобы быть вкурсе наших
      новостей и поддерживать общение:
      <a href="https://web.telegram.org/k/" class="global" target="_blank"
        >3D ElSchool</a
      >
    </p>
    <img
      class="image"
      src="@/assets/image.png"
      alt="image"
      width="100%"
      height="500px"
    />
    <img
      class="circle"
      src="@/assets/Ellipse.png"
      alt="Circle"
      width="82"
      height="82"
    />
    <p>
      Рекомендуем к прочтению статью:
      <a
        href="https://skillbox.ru/media/gamedev/chto_takoe_tekstury_i_kak_oni_rabotayut_v_3d_grafike/"
        class="global"
        target="_blank"
        >Что такое текстуры и как они работают в 3D-графике</a
      >
    </p>
    <img
      class="image"
      src="@/assets/image2.png"
      alt="image"
      width="100%"
      height="500px"
    />
    <img
      class="circle"
      src="@/assets/Ellipse.png"
      alt="Circle"
      width="82"
      height="82"
    />
    <p>
      Для вдохновения:
      <a
        href="https://www.behance.net/search/projects?field=3d+art"
        class="global"
        target="_blank"
        >3D арты</a
      >
    </p>
    <img
      class="image"
      src="@/assets/3D.png"
      alt="image"
      width="100%"
      height="500px"
    />
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
@media (max-width: 500px) {
  .video {
    display: flex;
    width: 100%;
    height: 400px;
    top: 20px;
    object-fit: cover;
  }
}
</style>
