<template>
  <div>路由导航</div>
  <Menu>
    <template v-for="(item,index) in routeList">
      <MenuItem
          v-if="!item.children"
          :index="item.puth"
          :key="item.push"
      >
        {{item.menuName}}
      </MenuItem>
      <JslSubMenu v-else :children="item.children" />
    </template>
  </Menu>
</template>

<script>
import {Menu, MenuItem} from 'element-ui';
import JslSubMenu from "./JslSubMenu";

export default {
  name: "index",
  data: function () {
    return {
      routeList: []
    }
  },
  props: [
    'routes'
  ],
  components: {
    JslSubMenu, Menu, MenuItem
  },
  created: function (props) {
    console.log(props);
  },
  computed: {},
  methods:{
    csRoutesToList: function (routes){
      let oneMenus = [];
      
      return routes.map(item=>{
        if (item.isOneMenu){

        }
      })
    }
  },
  mounted: function () {
    routeList = this.props.routes.map(item=>{

    })
  }
}
</script>

<style scoped>

</style>