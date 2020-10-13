<template>
  <div>
    <div class="top">
      <el-form :inline="true" :model="query" size="mini">
        <el-form-item label="下单开始时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="query.createTimeGE" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="下单结束时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="query.createTimeLT" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button>清空</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="center">
      <common-table :tableProps="tableProps" :data="tableData" @paginations="initPage"></common-table>
    </div>
  </div>
</template>

<script>
import CommonTable from "@/components/common/table";
import { aoService } from "../../api";
import _ from "loadsh";
import moment from "moment";

export default {
  name: "list",
  data() {
    return {
      query: {
        createTimeGE: moment()
          .startOf("d")
          .subtract(31, "d"),
        createTimeLT: moment()
          .endOf("d")
          .subtract(0, "d")
      },
      tableData: [],
      tableProps: {
        columns: [
          { label: "订单编号", prop: "id", width: "160px" },
          { label: "预约门店", prop: "store.name" },
          { label: "支付总金额", prop: "totalAmount" },
          { label: "联系电话", prop: "deliveryAddress.phone" },
          { label: "配送地址", prop: "receiveType" }
        ],
        pageOptions: {
          total: 10,
          show: true
        }
      }
    };
  },
  methods: {
    search() {
      this.initPage();
    },
    initPage(page = 1) {
      //默认配置
      const tableParams = {
        rows: 10,
        sort: "id",
        order: "desc",
        page: page
      };
      const params = _.assign(
        {
          type: 2,
          queryType: 1
        },
        tableParams,
        this.query
      );

      //  第一种是在接口调用的传参中 添加一个回调函数 根据有没有回调函数 来判断是否执行 特殊的code 的 展示方法
      //catch 接受一个reject  这边没有catch住的话 那么e 一定是还在的 全局

      aoService.tgOrderQuery(params).then(data => {
        this.tableProps.pageOptions.total = data.total;
        this.tableData = data.rows;
      });
    }
  },
  components: {
    CommonTable
  },
  created() {
    this.initPage();
  }
};
</script>

<style scoped lang="scss">
.top {
  height: 100px;
}
</style>
