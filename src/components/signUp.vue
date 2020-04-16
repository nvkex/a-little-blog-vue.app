<template>
  <div class="container" align="center">
    <form id="signUpForm" v-show="!submitted">
      <label>Full Name</label>
      <input type="text"  required v-model="userData.name"/>
      <label>Username</label>
      <input type="text"  required v-model="userData.usrname" />
      <label>Email</label>
      <input type="email"  required v-model="userData.email" />
      <label>Password</label>
      <input type="password"  required v-model="userData.pssword" />
      <br />
      <br />
      <button v-on:click.prevent="signupValidation" class="btn btn-outline-success">Sign Up</button>
    </form>

    <div id = "signUpFinished" v-show = "submitted">
        <h1 class = "display-4">Sign Up Complete!</h1>
        <br>
        <div>
            <p>Go to <a href = "/login">login</a>.</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: {
        name: "",
        usrname: "",
        email: "",
        pssword: ""
      },
      submitted: false
    };
  },

  methods: {
    signupValidation: function() {
        if(this.userData.name.length != 0 
        && this.userData.usrname.length != 0
        && this.userData.email.length !=0
        && this.userData.pssword.length !=0){
            this.$http.post('https://a-little-blog.firebaseio.com/userInfo.json',this.userData);
            this.submitted = !this.submitted;
        }
        else{
            alert("Please fill all the required fields!");
        }
    }
  }
};
</script>
<style scoped>
#signUpForm * {
  transition: 1s;
  box-sizing: border-box;
}

#signUpForm {
  background: #3b4d5e;
  margin: 20px auto;
  max-width: 500px;
  padding: 20px;
}

#signUpFinished a{
 text-decoration: none;
 color: #21deaf;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input {
  background: #1d272f;
  outline: none;
  border-radius: 10px;
  color: #bfbfbf;
  border: 0;
  height: 40px;
  padding-left: 10px;
}
</style>