<template>
  <div>
    <ul class="menu-list">
      <li v-for="item in headMenuList" :key="item.id" class="menu-item" @click="chooseMenu(item.id)" :class="{ active: item.id == selected ? true : false }">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "head-menu",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      selected: state => state.user.chooseMenuId
    })
  },
  props: {
    headMenuList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapMutations(["setChooseMenuId"]),
    chooseMenu(id) {
      this.setChooseMenuId(id);
    }
  }
};
</script>

<style scoped lang="scss">
.menu-list {
  display: flex;
  list-style: none;
  .menu-item {
    flex: 1;
    list-style: none;
  }
}
.active {
  color: #ff4c48;
}
</style>
