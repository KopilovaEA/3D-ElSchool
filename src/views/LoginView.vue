<template>
  <div class="login" img="@/assets/f.jpg">
    <!-- <img class="login-background-image" src="@/assets/f.jpg" alt="" /> -->
    <div class="login-form">
      <input placeholder="почта" type="text" v-model="login" />
      <input placeholder="Пароль" type="password" v-model="password" />
      <h3 class="form-error" v-if="error">{{ error }}</h3>
      <div class="login-form-btns">
        <button class="login-btn" @click="loginValidate()">Войти</button>
        <div class="registration-btn" @click="goToRegistration()">
          Регистрация
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.login {
  padding: 40px;
}
.login-form {
  z-index: 2;
  width: calc(var(--index) * 24);
  height: auto;
  border-radius: 50px;
  background: #ffffff3d;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 32px 0 #5672ff5e;
  border: 1px solid #ffffff8c;
  padding: 40px;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;
  gap: 30px;
}
input,
.login-btn {
  border-radius: 15px;
  font-size: calc(var(--index) * 1.5);
  background: none;
  border: 1px solid #636161;
  color: var(--vt-c-white-soft);
  padding: 4px 8px;
  text-align: center;
  transition: all 0.3s ease;
}

input:focus {
  box-shadow: 0 2px 16px 0 #ffffff5e;
}
input:focus::placeholder {
  color: transparent;
}

.login-form-btns {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.login-btn {
  width: 40%;
  align-self: center;
  cursor: pointer;
}
.login-btn:hover {
  background: #3ca444d0;
  transition: all 0.3s ease;
}

.registration-btn {
  font-size: calc(var(--index) * 1);
  width: calc(var(--index) * 5.8);
  align-self: center;
  color: var(--vt-c-white-mute);
  cursor: pointer;
}
.form-error {
  color: rgba(255, 0, 0, 0.707);
  text-align: center;
}

.login-background-image {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
}
</style>
