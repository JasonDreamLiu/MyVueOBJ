<template>
  <Menu :default-active="this.$route.path" mode="horizontal" router>
    <template v-for="(item,index) in routeList">
<!--      <JslSubMenu-->
<!--          v-if="item.children&&item.children.length>0"-->
<!--          :key="item.path"-->
<!--          :children="item.children"-->
<!--          :menuName="item.menuName"-->
<!--          :path="item.path"-->
<!--      />-->
      <MenuItem
          :key="item.path"
          :index="item.path"
      >
        {{ item.menuName }}
      </MenuItem>
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
      routeList: [],
      routeOneMenu: []
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
  methods: {
    csRoutesToList: function (routes) {
      return routes.filter(item => {
        if (!item.isOneMenu) {
          if (item.children) {
            item.children = this.csRoutesToList(item.children);
          }
          return true;
        } else {
          this.routeOneMenu.push(item);
          return false;
        }
      })
    }
  },
  mounted: function () {
    // this.routeList = this.routes.map(item=>{
    //   return item;
    // })
    this.routeList = this.csRoutesToList(this.routes).concat(this.routeOneMenu);
    console.log("ceshi:", this.routeList, this.routeOneMenu);
  }
}
</script>

<style scoped>

</style>