<template>
  <Container direction="vertical" id="jsl-app">
    <router-view name="header"/>
    <router-view/>
    <router-view name="bottom"/>
  </Container>
</template>

<script>
import { Container } from 'element-ui';

export default {
  name: "App",
  components: { Container },
}
</script>

<style scoped>

</style>