<template>
  <div class="menu">
    <el-row>
      <div class="one-menu" v-for="(item,i) in menus">
        <el-col :span="24/menus.length">
          <span class="one-menu-span" @click="clickOne(item.path)" @mouseenter="showTwoMenu" @mouseleave="hideTwoMenu">
            {{ item.name }}
            <div class="two-menu" v-if="item.children" v-show="isShow">
              <p v-for="(ele,index) in item.children">{{ ele.name }}</p>
            </div>
          </span>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import meunObj from "@/router/home";
export default {
  name: "HeadMenu",
  data() {
    return {
      menus: meunObj,       //路由菜单
      isShow : false        //初始化不显示二级菜单
    };
  },
  methods : {
      clickOne(path){
          this.$router.push(path);
      },
      showTwoMenu(){
          this.isShow=true;
      },
      hideTwoMenu(){
          this.isShow=false;
      }
  }
};
</script>

<style scoped>
.one-menu-span{
    position: relative;
    cursor: pointer;
}
.two-menu {
  padding: 10px;
  min-width: 100px;
  background-color: black;
  color: white;
  position: absolute;
  top: 35px;
  left: -50%;
  border-radius: 5px;
}
.two-menu::before {
  content: "";
  border-bottom: 10px solid wheat;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  top: -10px;
  left: 38%;
}
.two-menu p {
  text-align: center;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
</style>