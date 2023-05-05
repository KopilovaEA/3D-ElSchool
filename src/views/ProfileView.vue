<template>
  <TopBanner />
  <div class="profile">
    <h1>Профиль</h1>
    <div class="profile_contain">
      <img class="profile_image" src="@/assets/Profile.png" alt="profilee" />
      <div class="profile_inputs">
        <div class="text">
          <p class="profile_input_label">Имя:</p>
          <input class="profile_input" :placeholder="name" type="text" />
          <div class="profile_edit_btn">
            <svg
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
          <input class="profile_input" :placeholder="email" type="text" />
          <div class="profile_edit_btn">
            <svg
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
            placeholder=""
            v-model="password"
            type="password"
          />
          <div class="profile_edit_btn" @click="changePassword">
            <svg
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
        <tr>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <button class="profile_exit_btn">Выйти</button>
  </div>
</template>

<script>
import TopBanner from "@/components/home/TopBanner.vue";
import axios from "axios";
export default {
  name: "CoursesView",
  components: {
    TopBanner,
  },
  data: () => ({
    id: null,
    name: "",
    email: "",
    password: "",
  }),
  methods: {
    async changePassword() {
      if (this.password.length >= 6) {
        try {
          const response = await axios.post("http://localhost:3000/password", {
            password: this.password,
            id: this.id,
          });
          console.log(response.data);
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
  mounted() {
    this.name = this.$store.state.name;
    this.email = this.$store.state.email;
    this.id = this.$store.state.id;
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
.table {
  border: 1px solid #ffeded;
  table-layout: fixed;
  width: 60%;
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
  background: #0f4d94;
}
@media screen and (max-width: 790px) {
  .profile_contain {
    flex-direction: column;
    align-items: center;
  }
  .table {
    width: 100%;
  }
}
</style>
