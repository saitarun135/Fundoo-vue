<template>
<div class="main">
    <form @submit.prevent="handlesubmit">
        <div class="head">
            <h2>
                <Title />
            </h2>
            <h3>Create your Fundoo Account</h3>
        </div>
        <div class="name">
            <input type="name" required pattern="[A-Za-z]{3,10}">
            <label>First name</label>
        </div>
        <div class="name">
            <input type="name" required v-model="name" pattern="[A-Za-z]{3,10}">
            <label>Last name</label>
        </div>
        <div class="user-name">
            <input type="username" v-model="email" value="@gmail.com" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
            <label>Username</label>
        </div>
        <div class="pass">
            <input :type="password_type" class="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" v-model="password"  required>
            <label>Password</label>
        </div>
        <div class="pass">
            <input :type="password_type" class="password" v-model="password_confirmation" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$">
            <label>Confirm</label>
        </div>

        <div class="iconeye">
            <img src="../assets/Eye.jpg" @click="togglePassword()" class="fadeIn fourth" id="eye">
        </div>

        <a class="line3">Use 6 or more characters with a mix of letters, numbers & symbols</a>
        <a href=" http://localhost:3000/login" class="line4">Sign in instead</a>
        <input type="submit" value="Next">
    </form>
    <div class="side-image">
        <img src="../assets/sidelogo.jpg" alt="notfound" class="side-logo">
    </div>

</div>
</template>

<script>
import Title from './Title.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default {
    name: 'Register',
    components: {
        Title
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            password_type: "password",
            password_toggle_element: "show",
        }
    },

    methods: {
        togglePassword() {
            this.password_type = this.password_type === 'password' ? 'text' : 'password'
        },
        async handlesubmit() {
            await axios.post('register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            });
            alert("user registered successfully..!")
            this.$router.push('/login');
        }
    }
}
</script>
