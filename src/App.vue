<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import headerFile from './components/header.vue'

export default {
  components:{
    'add-blog':addBlog,
    'show-blog':showBlogs,
    'app-header':headerFile
    },

  data () {
    return {
     
    }
  }
}
</script>

<style>
 body{
    background: #2C3A47;
    margin: 20px;
    font-family: 'Gotu', sans-serif;
    color:#f2f2f2;;
    }
  h1{ 
      font-family: 'Work Sans', sans-serif;
      color: #21deaf;
    }
  #showBlog, #addBlogDiv{
        padding: 40px;
        background: #3b4d5e;
        max-width: 1100px;
        margin:0 auto ;
    }
</style>
