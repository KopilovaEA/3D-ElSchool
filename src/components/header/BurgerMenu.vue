<template>
  <div class="burger_menu">
    <div class="burger_menu__icon" @click="toggleMenu()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="30px"
        height="30px"
      >
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </div>
    <div class="burger_menu__background" v-show="isOpenMenu"></div>
    <div
      class="burger_menu__dark_overflow"
      @click="toggleMenu()"
      v-show="isOpenMenu"
    ></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpenMenu: false,
  }),
  methods: {
    toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu;
      console.log(this.isOpenMenu);
    },
  },
};
</script>

<style scoped>
.burger_menu {
  position: relative;
  z-index: 2;
}
.burger_menu__icon {
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 2;
}
.burger_menu__icon > svg {
  fill: white;
}

.burger_menu__background {
  background-color: #151516;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  z-index: 1;
}

.burger_menu__dark_overflow {
  background-color: hsla(240, 2%, 8%, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0.5;
  width: 100%;
  min-height: 100vh;
}
</style>
