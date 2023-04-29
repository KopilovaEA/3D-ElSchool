<template>
  <el-carousel trigger="click" height="500px" :pause-on-hover="false">
    <el-carousel-item v-for="item in images" :key="item.url">
      <img
        :src="item.url"
        style="width: 100%; height: 100%; object-fit: cover"
        alt=""
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data: () => ({
    images: [
      { url: require("../../assets/k.jpg") },
      { url: require("../../assets/kk.jpg") },
      { url: require("../../assets/Kukuruz.png") },
    ],
  }),
};
</script>

<style scoped>
@import "element-plus/dist/index.css";
</style>
