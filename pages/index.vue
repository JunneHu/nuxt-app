<template>
  <div class="container">1</div>
</template>

<script>
import { httpGet } from "~/plugins/httpRequest";
export default {
  async created() {
    const posts = await httpGet("/user/getUserInfo");
    console.log(posts);
  },
  async asyncData() {
    // const posts = await httpGet("/user/getUserInfo");
    // console.log("1");
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
