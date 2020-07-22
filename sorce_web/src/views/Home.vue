<template>
  <div class="home">
    <el-container>
      <el-header>
          <Head />
      </el-header>

      <el-main>
        <router-view />
      </el-main>

      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
export default {
  name: "Home",
  components: {
    Head
  },
  data() {
    return {};
  }
};
</script>


<style scoped>
.el-header {
  background-color: transparent;
  color: gray;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>>