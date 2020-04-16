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
            author:'',
            timeStamp: [],
            dateStamp: []
        },
        authors:['NVKEX','NukeWorm','lolol'],
        submitted: false
    }
  },
  methods:{
      post:function(){
            var tempT = [];
            var tempD = [];
            var d = new Date();
            tempD.push(d.getDate());
            tempD.push(d.getMonth());
            tempD.push(d.getFullYear());
            this.blog.dateStamp = tempD;
            tempT.push(d.getHours());
            tempT.push(d.getMinutes());
            tempT.push(d.getSeconds());
            this.blog.timeStamp = tempT;
            console.log(this.timeStamp);
            this.$http.post('https://a-little-blog.firebaseio.com/posts.json',this.blog).then(function(data){
            });
            this.submitted = !this.submitted;
      }
  },

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
    
    #addBlogDiv label{
        display:block;
        margin: 20px 0 10px;
    }

    #addBlogDiv input[type = "text"], select{
        background: #1d272f;
        outline:none;
        transition: 0.8s ease;
        border-radius:10px;
        color: #bfbfbf;
        border:0;
    }

    #addBlogDiv input[type = "text"], textarea{
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
