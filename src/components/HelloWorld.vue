<template>
<div class="hello">
<!--  <h1 class="title">{{ msg }}</h1>-->
  <p>
    欲梦测试写Vue单页面
    <Button>2333344444433</Button>
  </p>
</div>
</template>

<script>
import { Button } from 'element-ui';
export default {
  name: "HelloWorld",
  components: {Button},
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
@import './index.css';
@import "./index.less";
</style>
<style lang="less">
@import "../style/index.less";
</style>