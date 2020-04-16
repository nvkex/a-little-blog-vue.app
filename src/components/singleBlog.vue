<template>
    <div id = "singleBlog" class = "container">
        <hr>
        <h1> {{ blog.title }}</h1>
        <hr>
        <article> {{ blog.content }}</article>
        <br>
        <p><span class = "material-icons">perm_identity</span> {{ blog.author }} </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            blog: {}
        }
    },

    created(){
        this.$http.get('https://a-little-blog.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        });
    }
}
</script>

<style scoped>
    #singleBlog{
        padding: 40px;
        background: #3b4d5e;
        max-width: 1100px;
        margin:0 auto ;
    }

    .material-icons{
        vertical-align: sub;
    }
</style>