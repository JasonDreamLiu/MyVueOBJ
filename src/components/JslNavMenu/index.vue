<template>
  <Menu router mode="horizontal">
    <template v-for="(item,index) in routeList">
      <MenuItem
          v-if="!item.children"
          :index="item.path"
          :key="item.path"
      >
        {{item.menuName}}
      </MenuItem>
      <JslSubMenu
          v-else
          :children="item.children"
          :menuName="item.menuName"
          :path="item.path"
          :key="item.path"
      />
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
  props: {
    routes: {
      type: Array,
      default: []
    }
  },
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
    this.routeList = this.routes.map(item=>{
      return item;
    })
  }
}
</script>

<style scoped>

</style>