<template>
    
 <section id="content" class="m-t-lg wrapper-md animated fadeInUp">    
    <div class="container aside-xxl">
      <a class="navbar-brand block" href="index.html">Login || Timetable</a>
      <section class="panel panel-default bg-white m-t-lg">
        <header class="panel-heading text-center">
          <strong>Sign in</strong>
        </header>
        <form action="#" class="panel-body wrapper-lg" @submit.prevent="login">
          <div class="form-group">
            <label class="control-label">Email</label>
            <input type="email" placeholder="test@example.com" class="form-control input-lg" v-model="email">
          </div>
          <div class="form-group">
            <label class="control-label">Password</label>
            <input type="password" id="inputPassword" placeholder="Password" class="form-control input-lg" v-model="password">
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox"> Keep me logged in
            </label>
          </div>
          <a href="#" class="pull-right m-t-xs"><small>Forgot password?</small></a>
          <router-link to="auth">
          <button type="submit" class="btn btn-primary">Sign in</button>
          </router-link>
          <div class="line line-dashed"></div>
          <div class="line line-dashed"></div>
         
        </form>
      </section>
    </div>
  </section>

</template>

<script>
import { minLength, required } from 'vuelidate/lib/validators'
export default {
  data(){
    return{
    email: "",
    password: ""
  }
  },
  methods:{
    login(){
      
    }

  }

 
    
}
</script>