<template>
  <Header style="height: auto">
    <Row type="flex" :gutter="20">
      <Col class="logo" :span="4">
        <div>我是logo</div>
      </Col>
      <Col class="navMenu">
        <div>我是Menu</div>
        <Menu :default-active="$route.path" mode="horizontal" router>
          <template v-for="(item, index) in routes">
            <MenuItem
                v-if="item.children&&!item.children.length"
                :key="index"
                :index="item.path"
            >
              {{item.menuName}}
            </MenuItem>

          </template>
        </Menu>
      </Col>
    </Row>
  </Header>
</template>

<script>
import {Header, Row, Col, Menu, MenuItem} from 'element-ui';

export default {
  name: "RouterHeader",
  components: {Header, Row, Col, Menu, MenuItem},
  data:function (){
    return {
      routes:[]
    }
  },
  mounted: function () {
    console.log(this.$router.options.routes);
    this.routes = this.$router.options.routes;
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