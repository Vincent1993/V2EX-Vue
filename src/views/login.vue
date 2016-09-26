<template>
    <div class="login-form">
        <input type="text" class="input-block" placeholder="用户名" v-model="username">
        <button type="button" class="btn-login" @click="loginMethod">登陆</button>
    </div>
</template>
<script>
    export default{
        name: 'Login',
        data() {
            return {
                username: null
            };
        },
        methods: {
            loginMethod() {
                window.localStorage.username = this.username;
                this.$router.push({
                    name: 'user',
                    params: { username: this.username }
                });
                this.username = null;
            }
        }
    };
</script>
<style>
    .login-form{
        width: 300px;
        height: 300px;
        margin: 200px auto;
    }
    .input-block{
        display: block;
        width: 90%;
        height: 34px;
        padding: 6px 5%;
        margin-bottom: 15px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #acaba7;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 3px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    }
    .btn-login{
        display: inline-block;
        margin-bottom: 0;
        width: 25%;
        float: right;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background: #68d5aa;
        color:#fff;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        border-radius: 3px;
    }
</style>
