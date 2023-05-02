<template>
  <div class="register">
    <div class="register-form">
      <input
        :class="{ error_border: isEmailError }"
        placeholder="Почта"
        type="text"
        v-model.trim="email"
      />
      <input
        :class="{ error_border: isNameError }"
        placeholder="Имя"
        type="text"
        v-model.trim="name"
      />
      <input
        :class="{ error_border: isPasswordError }"
        placeholder="Пароль"
        type="password"
        v-model.trim="password"
      />
      <input
        :class="{ error_border: isConfirmPasswordError }"
        placeholder="Подтвердите пароль"
        type="password"
        v-model.trim="confirm_password"
      />
      <h3 class="form-error" v-if="error">{{ error }}</h3>
      <div class="register-form-btns">
        <button class="register-btn" @click="goToRegister()">
          Зарегистрироваться
        </button>
        <div class="registration-btn" @click="goToLogin()">
          Уже есть аккаунт? Войти
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    email: "",
    password: "",
    confirm_password: "",
    name: "",
    isEmailError: false,
    isPasswordError: false,
    isConfirmPasswordError: false,
    isNameError: false,
    error: "",
  }),
  methods: {
    registerValidate() {
      const regexEmail = /^\w+@\w+\.[A-Za-z]+$/;
      const regexName = /^[А-Яа-я]+|[A-Za-z]+$/;

      if (!this.email && !this.password) {
        this.isEmailError = true;
        this.isPasswordError = true;
        this.error = "Пожалуйста, введите почту и пароль";
        throw new Error("Пожалуйста, введите почту и пароль");
      } else if (!this.email) {
        this.isEmailError = true;
        this.error = "Пожалуйста, введите почту";
        throw new Error("Пожалуйста, введите почту");
      } else if (!regexEmail.test(this.email)) {
        this.isEmailError = true;
        this.error = "Почта введена некорректно";
        throw new Error("Почта введена некорректно");
      } else if (!this.name) {
        this.isNameError = true;
        this.error = "Введите имя";
        throw new Error("Введите имя");
      } else if (!regexName.test(this.name)) {
        this.isNameError = true;
        this.error = "Введите имя без пробелов и цифр";
        throw new Error("Введите имя без пробелов и цифр");
      } else if (!this.password) {
        this.isPasswordError = true;
        this.error = "Пожалуйста, введите пароль";
        throw new Error("Пожалуйста, введите пароль");
      } else if (this.password.length < 6) {
        this.isPasswordError = true;
        this.error = "Пароль не может быть меньше 6-ти символов";
        throw new Error("Пароль не может быть меньше 6-ти символов");
      } else if (!this.confirm_password) {
        this.isConfirmPasswordError = true;
        this.error = "Введите подтверждение пароля";
        throw new Error("Введите имя");
      } else if (this.password !== this.confirm_password) {
        this.isConfirmPasswordError = true;
        this.error = "Пароли не совпадают";
        throw new Error("Пароли не совпадают");
      }
    },
    async goToRegister() {
      this.isEmailError = false;
      this.isPasswordError = false;
      this.isConfirmPasswordError = false;
      this.isNameError = false;
      this.error = "";

      try {
        this.registerValidate();
      } catch (e) {
        throw new Error("Проверка не пройдена");
      }

      try {
        const response = await axios.put("http://localhost:3000/register", {
          email: this.email,
          password: this.password,
          name: this.name,
        });

        console.log(response.data);

        if (response.data?.message === "Ошибка") {
          this.isEmailError = true;
          this.isPasswordError = true;
          this.isConfirmPasswordError = true;
          this.isNameError = true;
          this.error = "Пользователь с таким email уже зарегистрирован";
        } else {
          this.$store.commit("setId", response.data.id);
          this.$store.commit("setName", this.name);
          this.$store.commit("setEmail", this.email);
          window.localStorage.setItem("auth", response.data.id);
          this.$router.push("/");
        }
      } catch (e) {
        console.log(e);
      }
    },
    goToLogin() {
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
.register {
  padding: 40px;
  max-width: 400px;
  margin: auto;
  height: calc(100vh - 50px - 80px);
}
.register-form {
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
.register-btn {
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

.register-form-btns {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.register-btn {
  width: 80%;
  align-self: center;
  cursor: pointer;
  border-color: #818181;
  color: black;
  overflow: hidden;
}
.register-btn:hover {
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

.error_border {
  border-color: rgba(255, 0, 0, 0.707);
  border-width: 2px;
}

@media screen and (min-width: 1050px) {
  .register {
    font-size: 28px;
    max-width: 700px;
  }

  .register-btn {
    width: 350px;
  }
  .registration-btn {
    font-size: 22px;
    padding: 10px;
  }
}
</style>
