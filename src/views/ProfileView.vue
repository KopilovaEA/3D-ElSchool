<template>
  <TopBanner />
  <div class="profile">
    <h1>Профиль</h1>
    <div class="profile_contain">
      <img class="profile_image" src="@/assets/Profile.png" alt="profilee" />
      <div class="profile_inputs">
        <div class="text">
          <p class="profile_input_label">Имя:</p>
          <input
            class="profile_input"
            v-model="inputs.name"
            :placeholder="state.name"
            type="text"
          />
          <div class="profile_edit_btn" @click="changeName">
            <svg
              class="svg_style"
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="blue"
            >
              <path
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
          </div>
        </div>
        <div class="text">
          <p class="profile_input_label">Почта:</p>
          <input
            class="profile_input"
            v-model="inputs.email"
            :placeholder="state.email"
            type="text"
          />
          <div class="profile_edit_btn" @click="changeEmail">
            <svg
              class="svg_style"
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="blue"
            >
              <path
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
          </div>
        </div>
        <div class="text">
          <p class="profile_input_label">Пароль:</p>
          <input
            class="profile_input"
            v-model="inputs.password"
            type="password"
          />
          <div class="profile_edit_btn" @click="changePassword">
            <svg
              class="svg_style"
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="blue"
            >
              <path
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <button class="admin_btn" @click="$router.push('/admin')" v-if="isAdmin">
      Админ-панель
    </button>
    <h2>Курсы:</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Тип</th>
          <th>Название</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td>
            {{ course.type === "pay" ? "Платный" : "Бесплатный" }}
          </td>
          <td>{{ course.title }}</td>
          <td>{{ course.description }}</td>
        </tr>
      </tbody>
    </table>
    <button class="profile_exit_btn" @click="logout">Выйти</button>
  </div>
</template>

<script>
import TopBanner from "@/components/home/TopBanner.vue";
import axios from "axios";
import { API } from "@/http/index.js";
export default {
  name: "CoursesView",
  components: {
    TopBanner,
  },
  data: () => ({
    state: {
      id: null,
      name: "",
      email: "",
    },
    inputs: {
      email: "",
      name: "",
      password: "",
    },
    courses: null,
    isAdmin: false,
  }),
  methods: {
    logout() {
      this.$store.commit("setId", null);
      this.$store.commit("setName", "");
      this.$store.commit("setEmail", "");
      window.localStorage.removeItem("auth");
      this.$router.push("/");
    },
    async changeName() {
      const regexName = /^[А-Яа-я]+|[A-Za-z]+$/;
      if (this.inputs.name && regexName.test(this.inputs.name)) {
        try {
          const response = await axios.post(API + "/name", {
            name: this.inputs.name,
            id: this.state.id,
          });
          console.log(response.data);
        } catch (e) {
          console.log(e);
        }
      }
    },
    async changeEmail() {
      const regexEmail = /^(\w+|\w+(.|_)*\w+)@\w+\.[A-Za-z]+$/;
      if (this.inputs.email && regexEmail.test(this.inputs.email)) {
        try {
          const response = await axios.post(API + "/email", {
            email: this.inputs.email,
            id: this.state.id,
          });
          console.log(response.data);
        } catch (e) {
          console.log(e);
        }
      }
    },
    async changePassword() {
      if (this.inputs.password.length >= 6) {
        try {
          const response = await axios.post(API + "/password", {
            password: this.inputs.password,
            id: this.state.id,
          });
          console.log(response.data);
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
  async mounted() {
    let response = await axios.post(API + "/user", {
      id: window.localStorage.getItem("auth"),
    });

    console.log("@Profile", response.data);

    if (!response.data?.message) {
      this.$store.commit("setId", response.data.id);
      this.$store.commit("setName", response.data.name);
      this.$store.commit("setEmail", response.data.email);
      this.$store.commit("setRole", response.data.role);
    }

    this.state.name = this.$store.state.name;
    this.state.email = this.$store.state.email;
    this.state.id = this.$store.state.id;
    this.isAdmin = this.$store.state.role === "admin" ? true : false;

    response = await axios.post(API + "/courses", {
      user_id: this.state.id,
    });
    this.courses = response.data;
  },
};
</script>

<style scoped>
.profile_edit_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.profile {
  padding: 20px;
}
.profile_image {
  width: 200px;
  height: 200px;
}
.profile_contain {
  display: flex;
  justify-content: center;
  gap: 100px;
}
.text {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.profile_input {
  border-radius: 5px;
  background: #788fb35e;
  border: none;
  font-size: 18px;
  padding: 5px 10px;
}
.profile_exit_btn {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background: #0074a67a;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
.profile_exit_btn:hover {
  transition: all 0.3s ease;
  transform: scale(1.1);
}
.profile_inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.profile_input_label {
  font-size: 18px;
  display: flex;
  align-items: center;
}
.admin_btn {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background: #0074a67a;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
.admin_btn:hover {
  transition: all 0.3s ease;
  transform: scale(1.1);
}

.table {
  border: 1px solid #ffeded;
  table-layout: fixed;
  width: 80%;
  padding-bottom: 20px;
  margin: auto;
}
.table th {
  font-weight: bold;
  padding: 5px;
  background: #fff6dd;
  border: 1px solid #dddddd;
}
.table td {
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: left;
}
.table tbody tr:nth-child(odd) {
  background: #e3e6ff;
}
.table tbody tr:nth-child(even) {
  background: #d2d7ff;
}
.svg_style:hover {
  background: #d0d0d0;
  text-decoration: underline;
}

@media screen and (max-width: 790px) {
  .profile_contain {
    flex-direction: column;
    align-items: center;
  }
  .table {
    width: 100%;
  }
  .admin_btn {
    margin: 20px;
  }
}
</style>
