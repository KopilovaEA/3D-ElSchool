<template>
  <div class="home_bg">
    <div class="home_bg_image">
      <div class="home_image_rect">
        <p style="font-size: 32px">Ведущая в России Онлайн школа</p>
        <p style="font-size: 26px">
          Электронный курс обучения 3D-моделированию
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
  width: 360px;
  height: 60%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
}

p {
  text-align: left;
}
</style>
