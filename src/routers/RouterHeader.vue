<template>
  <Header>
    <Row type="flex" :gutter="20">
      <Col class="logo" span="4">
        <div>我是logo</div>
      </Col>
      <Col class="navMenu">
        <div>我是Menu</div>
      </Col>
    </Row>
  </Header>
</template>

<script>
import { Header, Row, Col } from 'element-ui';
export default {
  name: "RouterHeader",
  components: { Header, Row, Col },
}
</script>

<style scoped>
.logo{
  background: #409EFF;
}
.navMenu{
  background: #67c23a;
}
.logo,.navMenu{
  height: 64px;
}
</style>