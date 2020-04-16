<template>
  <div id = "showBlog">
      <h1 align = "center" class = "display-4">A Little Blog</h1>
      <br>
      <div align = "center" class = "search-box">
          <input type = "text" v-model = "searchWords" placeholder = "Search..">
      </div>
      <div v-for = "blog in filteredBlogs" v-bind:key = "blog" class = "single-blog">
            <router-link v-bind:to = "'/blog/' + blog.id"><h2>{{ blog.title }}</h2></router-link>
            <article>{{ blog.content | snippet }}</article>
            <br>
            <ul class = "stamps">
                <li><span class = "material-icons">perm_identity</span> {{ blog.author }} </li>
                <li><span class="material-icons">date_range</span> {{ blog.dateStamp[0] }}/{{ blog.dateStamp[1] + 1 }}/{{ blog.dateStamp[2] }}</li>
                <li><span class="material-icons">schedule</span> {{ blog.timeStamp[0] }}:{{ blog.timeStamp[1] }}:{{ blog.timeStamp[2] }}</li>
                
            </ul>
            
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
      this.$http.get('https://a-little-blog.firebaseio.com/posts.json').then(function(data){
         return data.json();
      }).then(function(data){
            var tempArr = [];
            for(let key in data){
                data[key].id = key;
                tempArr.push(data[key]);
            }
            this.blogs = tempArr;
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

    .single-blog a{
        text-decoration: none;
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
        padding-left:20px;
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

    .material-icons{
        vertical-align: sub;
    }
</style>
