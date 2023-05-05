<template>
  <div class="home_bg">
    <div class="home_bg_image">
      <div class="home_image_rect">
        <p style="font-size: 32px">Ведущая в России Онлайн школа</p>
        <p class="text">
          Электронный курс по обучению 3D-моделированию в Blender
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home_bg {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  overflow: hidden;
}

.home_bg_image {
  background-repeat: no-repeat;
  background-image: url("@/assets/header_bg.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 50px;
}

.home_image_rect {
  background-color: #bca0eb;
  width: 390px;
  height: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
}

p {
  text-align: left;
}
.text {
  font-size: 26px;
}
@media (max-width: 652px) {
  .text {
    font-size: 28px;
  }
  .home_image_rect {
    height: 70%;
  }
}
</style>
