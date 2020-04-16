import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import singleBlog from './components/singleBlog.vue'
import signUpPage from './components/signUp.vue'
import loginPage from './components/login.vue'

export default[
    { path:'/', component:showBlogs },
    { path:'/newblog', component:addBlog },
    { path: '/blog/:id', component:singleBlog },
    { path:'/signup', component:signUpPage },
    { path:'/login', component:loginPage },
]