<template>
  <Container direction="vertical" id="jsl-app">
    <router-view name="header"/>
    <Main>
      <router-view/>
    </Main>
    <router-view name="bottom"/>
  </Container>
</template>

<script>
import { Container, Main } from 'element-ui';
export default {
  name: "App",
  components: { Container, Main },
}
</script>

<style scoped>

</style>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body,#jsl-app{
    height: 100%;
    width: 100%;
  }
</style>