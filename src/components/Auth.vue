<template>
  <div class="auth">
    <transition name="slide-fade" mode="out-in">
      <div v-if="isLogin" class="form" key="login">
        <div class="user-details">
          <img src="../assets/member.svg" />
        </div>
        <div class="input-fields">
          <custom-input ref="inputEmail" v-model="email" placeholder="E-Mail" width="100%" />
          <custom-input ref="inputPassword" type="password" v-model="password" placeholder="Пароль" width="100%" />
        </div>
        <div class="button-field">
          <template v-if="!isInProgress">
            <check-box v-model="rememberMeSenpai" label="Запомнить меня?" />
            <div class="button" @click="login">Войти</div>
          </template>
          <loading-indicator v-else />
        </div>
      </div>
      <div v-if="!isLogin" class="form register" key="register">
        <div class="user-details">
          <img src="../assets/scholarship.svg" />
        </div>
        <div class="input-fields">
          <custom-input ref="inputEmail" v-model="email" placeholder="E-Mail" width="100%" />
          <custom-input ref="inputGroup" v-model="group" placeholder="Учебная группа" width="100%" />
        </div>
        <div class="button-field">
          <template v-if="!isInProgress">
            <div class="button" @click="register">Запросить пароль</div>
          </template>
          <loading-indicator v-else />
        </div>
      </div>
    </transition>
    <div class="option">
      {{ isLogin ? 'Нет учетной записи?' : 'Уже есть учетная запись?' }}
      <span class="link" @click="!isInProgress && (isLogin = !isLogin)">{{ isLogin ? 'Зарегистрироваться' : 'Войти' }}</span>
    </div>
  </div>
</template>

<script>
  import CustomInput from './UI/CustomInput'
  import CheckBox from './UI/CheckBox'
  import LoadingIndicator from './UI/LoadingIndicator'

  import { FAKE_AUTH_DELAY } from '@/consts'

  export default {
    name: 'auth',
    components: {
      'custom-input': CustomInput,
      'check-box': CheckBox,
      'loading-indicator': LoadingIndicator
    },
    data () {
      return {
        rememberMeSenpai: false,
        email: '',
        password: '',
        group: '',

        isInProgress: false,

        isLogin: true
      }
    },
    methods: {
      login () {
        const { inputEmail, inputPassword } = this.$refs
        if (!inputEmail || !inputPassword) return

        if (!this.email) {
          const { $el } = inputEmail
          const input = $el.querySelector('input')
          input && input.focus()
          return
        }

        if (!this.password) {
          const { $el } = inputPassword
          const input = $el.querySelector('input')
          input && input.focus()
          return
        }

        this.isInProgress = true

        const { localStorage, sessionStorage } = window
        const storage = this.rememberMeSenpai ? localStorage : sessionStorage

        storage.setItem('token', 'placeholder')

        setTimeout(() => {
          this.$router.push({ path: '/' })
        }, FAKE_AUTH_DELAY)
      },
      register () {
        const { inputEmail, inputGroup } = this.$refs
        if (!inputEmail || !inputGroup) return

        if (!this.email) {
          const { $el } = inputEmail
          const input = $el.querySelector('input')
          input && input.focus()
          return
        }

        if (!this.group) {
          const { $el } = inputGroup
          const input = $el.querySelector('input')
          input && input.focus()
          return
        }

        this.isInProgress = true
      }
    }
  }
</script>

<style scoped>
  .auth {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 100%;
  }

  .auth .form {
    width: 350px;
    height: 400px;
    background-color: white;
    margin: -100px auto 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    /*transition: all 0.3s cubic-bezier(.25,.8,.25,1);*/
    border-radius: 5px;
    border-top: 3px solid orange;

    display: flex;
    flex-direction: column;
  }

  .auth .form .button-field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    width: 270px;
    align-self: center;
    flex: 1;
  }

  .auth .form.register .button-field {
    justify-content: center;
  }

  .auth .form .button-field .submit-wrapper {
    position: relative;
    width: 20px;
    height: 17px;
  }

  .auth .form .button-field .button {
    /*position: absolute;*/
    /*background-color: #FFCA4F;*/
    border-radius: 6px;
    /*width: 110px;*/
    padding: 0 20px;
    height: 40px;
    text-align: left;
    font-weight: 500;
    color: #fff;
    line-height: 40px;
    /*top: calc(50% - 20px);*/
    /*left: 40px;*/
    text-align: center;
    font-size: 1rem;
    text-shadow: 1px 1px 1px #999;
  }

  .auth .form .input-fields {
    align-self: center;
    width: 270px;
  }

  .auth .form .input-fields > div {
    margin-top: 25px;
  }

  .auth .form .user-details {
    position: relative;
    padding-top: 15px;
    text-align: center;
    z-index: 12;
  }
  
  .auth .form .user-details::before {
    z-index: -1;
    position: absolute;
    display: block;
    left: -20px;;
    top: calc(50% - 20px);
    line-height: 40px;
    background-color: #FFCA4F;
    border-radius: 6px;
    width: 150px;
    height: 40px;
    text-align: left;
    padding-left: 15px;
    content: 'Вход';
    color: white;
    text-shadow: 1px 1px 1px #bbb;
  }

  .auth .form.register .user-details::before {
    content: 'Регистрация';
  }

  .auth .form .user-details img {
    width: 128px;
    height: 128px;

    border-radius: 50%;
    background-color: #FFCA4F;

  }

  .auth .option {
    width: 350px;
    margin-top: 20px;
    text-align: center;
    font-size: 0.8rem;
  }

  /*.auth .form:hover {
    box-shadow: 0 7px 15px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }*/
 .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
