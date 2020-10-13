<template>
  <div>
    <el-table :data="data" stripe style="width: 100%">
      <!--      在这里加一个template来进行for循环  在el-table-column上进行if判断  v-for和v-if在同一个组件上使用 由于v-for的优先级高  所以会直接循环完 -->
      <el-table-column :prop="item.prop" :label="item.label" :width="item.width ? item.width : '120px'" v-for="(item, index) in tableProps.columns" :key="index"> </el-table-column>
    </el-table>
    <el-pagination v-if="tableProps.pageOptions.show" background layout="prev, pager, next" @current-change="changPage" :total="tableProps.pageOptions.total"> </el-pagination>
  </div>
</template>

<script>
/*
  1.封装一个table组件 来实现分页功能
  2.通过对象的方式把 th td添加  无非就是一个v-for 的方式  或者是一个迭代的方式
  3.一列的属性在对象中，这个是根据自己的想法来的 常规来讲应该就是 英文单词  学英语好烦啊

  * **/

export default {
  props: {
    data: {
      type: Array
    },
    tableProps: {
      type: Object
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    changPage(page) {
      this.$emit("paginations", page);
    }
  }
};
</script>

<style scoped lang="scss">
.el-pagination {
  margin-top: 10px;
}
</style>
