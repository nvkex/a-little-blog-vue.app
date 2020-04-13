<template>
  <div id = "addBlogDiv">

        <h1 align = "center" class = "display-4">Add a new blog</h1>
        <form v-show = "!submitted">
            <br>
            <input type = "text" required v-model = "blog.title" placeholder = "Blog Title">
            <br>
            <textarea v-model = "blog.content" placeholder = "Blog Content"></textarea>
            <label>Author: </label>
            <select v-model = "blog.author">
                <option v-for = "author in authors" v-bind:key = "author">{{ author }}</option>
            </select>
            <br><br>
            <button v-on:click.prevent = "post" class = "btn btn-outline-success">Add Blog</button>
        </form>    
        <div v-show = "submitted">
            <h3 align = "center">BLOG POSTED!!</h3>
        </div>
        <div id = "preview">
            <h3>Blog Preview</h3>
            <p>Blog Title: {{ blog.title }}</p>
            <p>Blog Content:</p>
            <p>{{ blog.content }}</p>
            <p>Author: {{ blog.author }}</p>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blog:{
            title:'',
            content:'',
            author:''
        },
        authors:['NVKEX','NukeWorm','lolol'],
        submitted: false
    }
  },
  methods:{
      post:function(){
          this.$http.post('http://jsonplaceholder.typicode.com/posts',{
              title: this.blog.title,
              body: this.blog.content,
              userId: 1
          }).then(function(data){
              console.log(data);
          });
          this.submitted = !this.submitted;
      }
  }
}
</script>

<style>
    #addBlogDiv *{
        box-sizing: border-box;
    }

    #addBlogDiv{
        margin: 20px auto;
        max-width: 500px;
    }
    
    label{
        display:block;
        margin: 20px 0 10px;
    }

    input[type = "text"], select{
        background: #1d272f;
        outline:none;
        transition: 0.8s ease;
        border-radius:10px;
        color: #bfbfbf;
        border:0;
    }

    input[type = "text"], textarea{
        display:block;
        width: 100%;
        padding: 8px;
        border:0;        
        background: #1d272f;
        color: #bfbfbf;
    }

    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }

    h3{
        margin-top: 10px;
    }
</style>
