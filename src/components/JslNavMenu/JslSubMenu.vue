<template>
  <Submenu :index="path">
    <template :slot="menuName"></template>
    <template v-for="(item,index) in children">
      <MenuItem
          v-if="!item.children"
          :index="item.path"
          :key="item.path"
      >
        {{ item.menuName }}
      </MenuItem>
      <JslSubMenu
          v-else
          :children="item.children"
          :name="item.menuName"
          :path="item.path"
          :key="item.path"
      />
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