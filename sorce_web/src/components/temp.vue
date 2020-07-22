<template>
  <div>
    <el-row>
      <el-col :span="6">
        <span style="position:relative;">
          1
          <div class="two-menu">
            <p>2</p>
            <p>2</p>
            <p>2</p>
            <p>2</p>
          </div>
        </span>
      </el-col>
      <el-col :span="6">
        <span style="position:relative;">
          1
          <div class="two-menu">
            <p>2</p>
            <p>2</p>
            <p>2</p>
            <p>2</p>
          </div>
        </span>
      </el-col>
      <el-col :span="6">
        <span style="position:relative;">
          1
          <div class="two-menu">
            <p>2</p>
            <p>2</p>
            <p>2</p>
            <p>2</p>
          </div>
        </span>
      </el-col>
      <el-col :span="6">
        <span style="position:relative;">
          1
          <div class="two-menu">
            <p>2</p>
            <p>2</p>
            <p>2</p>
            <p>2</p>
          </div>
        </span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import meunObj from '@/router/home'
export default {
    name : 'HeadMenu'
}
</script>

<style scoped>
.two-menu {
  padding: 10px;
  min-width: 100px;
  background-color: black;
  color: white;
  position: absolute;
  top: 35px;
  left: -50px;
  right: 0;
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
}
</style>