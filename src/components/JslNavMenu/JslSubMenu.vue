<template>
<!--  <template v-for="(item,index) in children">-->
<!--    <template v-if="item.children && item.children.length > 0">-->
<!--      <Submenu :index="item.puth">-->
<!--        <template slot="title">{{ item.menuName }}</template>-->
<!--        <JslMenuItem :children="item.children"/>-->
<!--      </Submenu>-->
<!--    </template>-->
<!--    <template v-else>-->
<!--      <MenuItem :index="item.puth" :key="item.puth">-->
<!--        {{ item.menuName }}-->
<!--      </MenuItem>-->
<!--    </template>-->
<!--  </template>-->
</template>

<script>
import {MenuItem, Submenu} from 'element-ui';
import JslSubMenu from './JslSubMenu';

export default {
  name: "JslSubMenu",
  props: [
    'children'
  ],
  components: [
    MenuItem, Submenu, JslSubMenu
  ]
}
</script>

<style scoped>

</style>