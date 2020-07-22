<template>
  <div class="head-component">
    <el-row>
      <el-col :span="8">
        <div>logo</div>
      </el-col>
      <el-col :span="8">
          <HeadMenu />
      </el-col>
      <el-col :span="8">
        <div>登录</div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import HeadMenu from '@/components/HeadMenu.vue'
export default {
  name: "Head",
  components : {
      HeadMenu
  }
};
</script>
<style scoped>

</style>