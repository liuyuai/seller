<template>
    <div class="left-aside">
        <el-menu default-active="features.order.list" class="el-menu-vertical-demo" @select="selectMenu">
            <el-submenu :index="item.state" v-for="(item) in leftMenuList" :key="item.id">
                <template slot="title">
                    <span>{{item.name}}</span>
                </template>
                <el-menu-item-group v-for="(i) in item.subMenus" :key="i.id">
                    <el-menu-item :index="i.state">{{i.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>

  export default {
    name: "left-menu",
    props:{
      leftMenuList:{
        type:Array,
        default:() => []
      }
    },
    methods: {
      selectMenu(index){
        this.$router.push({name:index})
      }
    }
  }
</script>

<style scoped lang="scss">
    .left-aside{
    }
</style>