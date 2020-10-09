<template>
  <div>
    <common-table :data="tableData" :tableProps="tableProps" @paginations="initPage"></common-table>
  </div>
</template>
<script>
  import CommonTable from '@/components/common/table'
  import _ from "loadsh";
  /*
  1.封装一个table组件 来实现分页功能
  2.通过对象的方式把 th td添加  无非就是一个v-for 的方式  或者是一个迭代的方式
  3.一列的属性在对象中，这个是根据自己的想法来的 常规来讲应该就是 英文单词  学英语好烦啊

  当前页面的接口需要放在当前页面


  * **/
  import {aoService} from "@/api";
  export default {
    name: "cancel",
    data(){
      return {
        tableData:[],
        tableProps:{
          columns:[
            {label:"订单编号", prop:"fkTgouOrderId",width:"160px"},
            {label:"支付方式", prop:"orderPayMethod"},
            {label:"操作人", prop:"creator"},
            {label:"退款金额", prop:"confirmAmount"},
            {label:"订单状态", prop:"orderState"}
          ],
          pageOptions:{
            total:10,
            show:true
          }
        },
      }
    },
    components:{
      CommonTable
    },
    methods:{
      initPage(page = 1){
        //默认配置
        const tableParams = {
          rows:10,
          sort:"id",
          order:"desc",
          page:page
        };
        aoService.orderRequestQuery(_.assign({
          stateList:"Confirmed"
        },tableParams)).then(data => {
          this.tableProps.pageOptions.total = data.total;
          this.tableData = data.rows;
        });
      }
    },
    created() {
      this.initPage();
    }
  }

</script>

<style scoped>

</style>