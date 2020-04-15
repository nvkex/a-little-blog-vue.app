<template>
    <nav id = "headr">
        <ul>
            <li><router-link to = "/" exact>Home</router-link></li>
            <li><router-link to = "/newblog" exact>New Blog</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {

}
</script>
<style scoped>
    ul{
        list-style-type: none;
        text-align: center;
        margin: 0;
    }

    li{
        display: inline-block;
        margin: 0 10px;
    }

    a{
        transition: 0.5s;
        color: #f2f2f2;
        text-decoration: none;
        padding: 6px 8px;
        border-radius: 10px;
    }

    nav{
        background: #3b4d5e;
        max-width: 1100px;
        padding: 20px 0;
        margin:0 auto ;
        margin-bottom: 20px;
    }

    .router-link-active{
        background:#2C3A47;
        color: #21deaf;
    }
</style>