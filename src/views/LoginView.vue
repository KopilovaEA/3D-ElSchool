<template>
  <div class="login" img="@/assets/f.jpg">
    <div class="login-form">
      <input
        :class="{ login_error: isLoginError }"
        placeholder="Почта"
        type="text"
        v-model.trim="login"
      />
      <input
        :class="{ password_error: isPasswordError }"
        placeholder="Пароль"
        type="password"
        v-model.trim="password"
      />
      <h3 class="form-error" v-if="error">{{ error }}</h3>
      <div class="login-form-btns">
        <button class="login-btn" @click="goToLogin()">Войти</button>
        <div class="registration-btn" @click="goToRegistration()">
          <router-link to="/register">
            <span class="registration-btn"
              >Ещё нет профиля? Зарегистрируйтесь</span
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    login: "",
    password: "",
    isLoginError: false,
    isPasswordError: false,
    error: "",
  }),
  methods: {
    loginValidate() {
      const regex = /^\w+@\w+\.\w+$/;

      if (!this.login && !this.password) {
        this.isLoginError = true;
        this.isPasswordError = true;
        this.error = "Пожалуйста, введите почту и пароль";
        throw new Error("Пожалуйста, введите почту и пароль");
      } else if (!this.login) {
        this.isLoginError = true;
        this.error = "Пожалуйста, введите почту";
        throw new Error("Пожалуйста, введите почту");
      } else if (!this.password) {
        this.isLoginError = true;
        this.error = "Пожалуйста, введите пароль";
        throw new Error("Пожалуйста, введите пароль");
      } else if (!regex.test(this.login)) {
        this.isLoginError = true;
        this.error = "Почта введена некорректно";
        throw new Error("Почта введена некорректно");
      } else if (this.password.length < 6) {
        this.isPasswordError = true;
        this.error = "Пароль не может быть меньше 6-ти символов";
        throw new Error("Пароль не может быть меньше 6-ти символов");
      }
    },
    async goToLogin() {
      this.isLoginError = false;
      this.isPasswordError = false;
      this.error = "";

      try {
        this.loginValidate();
      } catch (e) {
        throw new Error("Проверка не пройдена");
      }

      try {
        const response = await axios.post("http://localhost:3000/login", {
          email: this.login,
          password: this.password,
        });

        console.log(response.data);

        if (response.data?.message === "Ошибка") {
          this.isLoginError = true;
          this.isPasswordError = true;
          this.error = "Пользователя с такими данными не найдено";
        } else {
          this.$store.commit("setId", response.data.id);
          this.$store.commit("setName", response.data.name);
          this.$store.commit("setEmail", response.data.email);
          window.localStorage.setItem("auth", response.data.id);
          this.$router.push("/");
        }
      } catch (e) {
        console.log(e);
      }
    },
    goToRegistration() {},
  },
};
</script>

<style scoped>
.login {
  padding: 40px;
  max-width: 400px;
  margin: auto;
  height: calc(100vh - 50px - 80px);
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
  border-color: #818181;
  color: black;
}
.login-btn:hover {
  background: linear-gradient(
    120deg,
    rgb(161, 88, 174),
    rgb(208, 130, 222),
    rgba(208, 130, 222, 0.807)
  );
}

.registration-btn {
  font-size: calc(var(--index) * 1);
  width: calc(var(--index) * 5.8);
  align-self: center;
  color: var(--vt-c-white-mute);
  color: #636161;
  cursor: pointer;
}
.registration-btn:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}
.form-error {
  color: rgba(255, 0, 0, 0.707);
  text-align: center;
  margin: 0;
}

.login_error,
.password_error {
  border-color: rgba(255, 0, 0, 0.707);
  border-width: 2px;
}

@media screen and (min-width: 1050px) {
  .login {
    font-size: 28px;
    max-width: 700px;
  }

  .login-btn {
    width: 300px;
  }
  .registration-btn {
    font-size: 22px;
    padding: 10px;
  }
}
</style>
