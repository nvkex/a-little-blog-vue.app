<template>
  <div id = "showBlog">
      <h1 align = "center" class = "display-4">A Little Blog</h1>
      <br>
      <div align = "center" class = "search-box">
          <input type = "text" v-model = "searchWords" placeholder = "Search..">
      </div>
      <div v-for = "blog in filteredBlogs" v-bind:key = "blog" class = "single-blog">
          <h2>{{ blog.title }}</h2>
          <article>{{ blog.body | snippet }}</article>
          
      </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixins';

export default {

  data () {
    return {
        blogs:[],
        searchWords:''
    }
  },
  created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs = data.body.slice(0,10);
      });
  },

  computed:{
  },

  mixins:[searchMixin]
}
</script>

<style>
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background:#1a1a1a;
        border-radius: 10px;
    }

    .single-blog:hover{
        cursor: pointer;
    }

    .single-blog h2{
        color:#f2f2f2;
    }
    .single-blog article{
        color: #a6a6a6;
    }

    .search-box input{
        outline:none;
        transition: 0.8s ease;
        height: 50px;
        width: 80%;
        padding-left:14px;
        border:0;
        border-radius:10px;
        background: #1d272f;
        color: #bfbfbf;
    }

    .search-box input:focus{
        width: 100%;
        border:0;
        border-radius:40px;
    }
</style>
