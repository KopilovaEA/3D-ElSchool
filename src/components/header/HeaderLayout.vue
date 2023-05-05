<template>
  <header class="header">
    <div class="header_left_side">
      <router-link to="/">
        <div class="header_logo_content">
          <img class="header_logo" src="@/assets/logo.png" />
          <span class="header_title">3D ElSchool</span>
        </div>
      </router-link>
      <div class="header_menu" v-show="windowWidth > 630">
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
    <div v-if="windowWidth > 630">
      <router-link to="/login" v-if="!$store.state.id">
        <span style="font-size: 18px">Войти</span>
      </router-link>
      <router-link to="/profile" v-else>
        <span style="font-size: 18px">{{ $store.state.name }}</span>
      </router-link>
    </div>
    <BurgerMenu v-else />
  </header>
</template>

<script>
import BurgerMenu from "./BurgerMenu.vue";
export default {
  components: {
    BurgerMenu,
  },
  data: () => ({
    windowWidth: null,
  }),
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", (event) => {
      this.windowWidth = event.currentTarget.innerWidth;
    });
  },
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #191a1c;
  width: calc(100% - 40px);
  height: 50px;
  padding: 0 20px;
  color: #fff;

  display: flex;
  flex-direction: row;
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
  white-space: nowrap;
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
