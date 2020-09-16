<template>
<div class="hello">
  <h1 class="title">{{ msg }}</h1>
  <p>
    欲梦测试写Vue单页面
  </p>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
@import "./index.less";
</style>
<style lang="less">
@import "@/style/index.less";
</style>