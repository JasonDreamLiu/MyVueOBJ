<template>
  <div id="jsl-app">
    <h1 class="title">hi</h1>
<!--    <HelloWorld msg="??????aaaaa啊啊啊啊啊"></HelloWorld>-->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {HelloWorld},
  component: {
    HelloWorld
  }
}
</script>

<style scoped>

</style>