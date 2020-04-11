<template>
  <div id = "addBlogDiv">

      <h2>Add a new blog.</h2>
      <form>
          <label>Blog Title</label>
          <input type = "text" required v-model = "blog.title">
          <label>Blog Content</label>
          <textarea v-model = "blog.content"></textarea>
      </form>    

      <div id = "preview">
          <h3>Blog Preview</h3>
          <p>Blog Title: {{ blog.title }}</p>
          <p>Blog Content: {{ blog.content }}</p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blog:{
        title:'',
        content:''
        }
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

    input[type = "text"], textarea{
        display:block;
        width: 100%;
        padding: 8px;
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
