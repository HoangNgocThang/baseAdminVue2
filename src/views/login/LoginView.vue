<template>
  <BlankLayout>
    <div class="container">
      <div class="limiter">
        <div class="container-login">
          <div class="wrap-login">

            <a-row :gutter="16" style="width: 100%;">
              <img src="../../assets/vnpost_logo.svg" class="logo" alt="logo">
              <a-form
                  id="formLogin"
                  class="user-layout-login"
                  ref="formLogin"
                  :form="form"
              >
                <a-form-item>
                  <a-input
                      size="large"
                      type="text"
                      class="input"
                      placeholder="Tài khoản truy cập"
                      v-decorator="[
                      'username',
                      {
                        rules: [{ required: true, message: 'Tài khoản là bắt buộc' }],
                        validateTrigger: 'change'
                      }
                    ]"
                  >
                    <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-input-password
                      size="large"
                      placeholder="Mật khẩu truy cập"
                      v-decorator="[
                      'password',
                      {rules: [{ required: true, message: 'Mật khẩu là bắt buộc' }], validateTrigger: 'blur'}
                    ]"
                  >
                    <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                  </a-input-password>
                </a-form-item>
                <a-form-item>
                  <a-input
                      size="large"
                      placeholder="Mã OTP"
                      :maxLength="6"
                      v-decorator="[
                      'otp',
                      {
                        rules: [
                          { required: true, message: 'OTP là bắt buộc' },
                          { len: 6, message: 'OTP yêu cầu 6 chữ số' },
                          // { validator: numberRequired },
                        ],
                        validateTrigger: 'change',
                      }
                    ]"
                  >
                    <a-icon slot="prefix" type="qrcode" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                  </a-input>
                </a-form-item>
<!--                <a-form-item>-->
<!--                  <a-select-->
<!--                      class="select"-->
<!--                      size="large"-->
<!--                      placeholder="Vui lòng chọn ứng dụng cần truy cập"-->
<!--                      v-decorator="[-->
<!--                      'clientId',-->
<!--                      {rules: [{ required: true, message: 'Bạn bắt buộc phải chọn ứng dụng cần truy cập !' }], validateTrigger: 'change'}-->
<!--                      ]"-->
<!--                  >-->
<!--                    <a-select-option v-for="client in clients" :key="client.id" :value="client.code">-->
<!--                      {{ client.name }}-->
<!--                    </a-select-option>-->
<!--                  </a-select>-->
<!--                </a-form-item>-->
                <div style="display: flex; justify-content: flex-end">
                  <a @click="goToForgotPassword">Quên mật khẩu</a>
                </div>
                <a-form-item style="margin-top:24px">
                  <a-button
                      @click="handleSubmit"
                      size="large"
                      type="primary"
                      class="login-form-btn"
                      :loading="state.loginBtn"
                      :disabled="state.loginBtn"
                  >Đăng nhập
                  </a-button>
                </a-form-item>

              </a-form>
              <div style="margin-top: 160px">

              </div>
            </a-row>

          </div>
        </div>
      </div>
    </div>
  </BlankLayout>
</template>

<script>
import BlankLayout from "@/components/BlankLayout.vue";

export default {
  name: "LoginView",
  components: {
    BlankLayout
  },
  data() {
    return {
      loginBtn: false,
      requiredTwoStepCaptcha: false,
      stepCaptchaVisible: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        smsSendBtn: false
      },
      clients: []
    }
  },
  created() {
    this.getClients()
    // this.$router.push({ name: 'login', });
    //   // this.$router.push({ name: 'login', query: { redirect: '/login' } });
  },
  methods: {
    handleSubmit(e) {
      console.log(e)
      // let _this = this
      this.$router.push({name: 'home'});
    },
    requestFailed(err) {
      this.$notification['error']({
        message: 'Lỗi',
        description: err.message || 'Đã có lỗi xảy ra',
        duration: 4
      })
    },
    getClients() {

    },
    goToForgotPassword() {
      this.$router.push({name: 'forgot_password'})
    }

  },
  watch: {}
}
</script>

<style lang='less'>
@import "login";
</style>
