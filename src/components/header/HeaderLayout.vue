<template>
  <header class="header">
    <div class="header_left_side">
      <router-link to="/">
        <div class="header_logo_content">
          <img class="header_logo" src="@/assets/logo.png" />
          <span class="header_title">3D ElSchool</span>
        </div>
      </router-link>
      <div class="header_menu">
        <router-link to="/courses">
          <span>Курсы</span>
        </router-link>
        <router-link to="/format">
          <span>Формат</span>
        </router-link>
        <router-link to="/blog">
          <span>Блог</span>
        </router-link>
        <router-link to="/jobs">
          <span>Вакансии</span>
        </router-link>
      </div>
    </div>
    <router-link to="/login">
      <span style="font-size: 18px">Войти</span>
    </router-link>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #191a1c;
  width: calc(100% - 40px);
  height: 50px;
  padding: 0 20px;
  color: #fff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
}

.header_left_side {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.header_logo_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.header_logo {
  width: 38px;
  height: 38px;
}
.header_title {
  font-size: 28px;
  vertical-align: baseline;
}

.header_menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
}
</style>
