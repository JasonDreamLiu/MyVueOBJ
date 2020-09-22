<template>
  <Submenu :index="path">
    <template slot="title">{{menuName}}</template>
    <template v-for="(item,index) in children">
      <JslSubMenu
          v-if="item.children&&item.children.length>0"
          :children="item.children"
          :name="item.menuName"
          :path="item.path"
          :key="item.path"
      />
      <MenuItem
          v-else
          :index="item.path"
          :key="item.path"
      >
        {{ item.menuName }}
      </MenuItem>
    </template>
  </Submenu>
</template>

<script>
import {MenuItem, Submenu} from 'element-ui';
import JslSubMenu from './JslSubMenu';


export default {
  name: "JslSubMenu",
  props: [
    'children',
    'path',
    'menuName'
  ],
  components: {
    MenuItem, Submenu, JslSubMenu
  }
}
</script>

<style scoped>

</style>