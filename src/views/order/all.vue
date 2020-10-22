<template>
  <div>
    <cool-name>dasdad</cool-name>
    {{title}}
  </div>
</template>

<script>
  const title ="啦啦啊";

  const arr = [{a:1},{a:1}];
  const s = new Set('dddd');
  console.log(s);

  const map = new Map([[{a:1},'d']])
  console.log(map);

  class People {
    constructor(obj){
      this.name = obj.name;
      this.age = obj.age;
      this.sex = obj.sex;
    }
    isGirl(){
      if(this.sex === "nv"){
        return true;
      }else{
        return false
      }
    }
  }
  let wangzong = new People({name:"wangzong",age:'28',sex:'boy'});
  console.log(wangzong);


export default {
  name: "all",
  data() {
    return {
      title:title
    }
  }
};
</script>

<style scoped></style>
