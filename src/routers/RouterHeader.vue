<template>
  <Header style="height: auto">
    <Row type="flex" :gutter="20">
      <Col class="logo" :span="4">
        <div>我是logo</div>
      </Col>
      <Col class="navMenu">
        <div>我是Menu</div>
        <JslNavMenu :routes="this.$router.options.routes" />
      </Col>
    </Row>
  </Header>
</template>

<script>
import {Header, Row, Col} from 'element-ui';
import JslNavMenu from '../components/JslNavMenu';

export default {
  name: "RouterHeader",
  components: {Header, Row, Col, JslNavMenu},
  data:function (){
    return {
      routes:[]
    }
  },
  mounted: function () {
    console.log(this.$router.options.routes);
  }
}
</script>

<style scoped>
.logo {
  background: #409EFF;
}

.navMenu {
  background: #67c23a;
}

.logo, .navMenu {
}
</style>