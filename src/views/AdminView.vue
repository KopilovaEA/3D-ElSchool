<template>
  <div class="admin_panel">
    <h2>Дать доступ:</h2>
    <form class="admin_panel__access_form" @submit.prevent="onSubmit">
      <input type="email" v-model.trim="email" placeholder="email" required />
      <select v-model="selected_course" required>
        <option disabled value="">Выберите один из курсов</option>
        <option v-for="el in courses" :key="el.id" :value="el.id">
          {{ el.title }}
        </option>
      </select>
      <button type="submit">Добавить</button>
      <h3 v-if="error" style="color: red; margin: 6px auto">{{ error }}</h3>
      <h3 v-if="success" style="color: green; margin: 6px auto">
        {{ success }}
      </h3>
    </form>
    <h2>Пользователи:</h2>
    <div class="admin_panel__search">
      <span>Поиск:</span>
      <input v-model="search" placeholder="email" type="text" />
    </div>
    <table class="admin_panel__table">
      <thead>
        <tr>
          <th style="width: 30px">ID</th>
          <th style="width: 90px">Имя</th>
          <th style="min-width: 90px">Почта</th>
          <th style="min-width: 90px">Курсы</th>
          <th style="width: 20px"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in filtered_users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.title }}</td>
          <td
            style="color: red; cursor: pointer"
            @click="deleteAccess(user.id, user.title)"
          >
            x
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { API } from "@/http/index.js";
export default {
  data: () => ({
    users: null,
    filtered_users: null,
    search: "",
    email: "",
    selected_course: "",
    courses: null,
    error: "",
    success: "",
  }),
  watch: {
    search() {
      if (this.search.length !== 0) {
        this.filtered_users = this.users.filter((user) =>
          user.email.includes(this.search)
        );
      } else {
        this.filtered_users = this.users;
      }
    },
  },
  methods: {
    async deleteAccess(user_id, course_title) {
      const answer = confirm(
        `Вы уверены, что хотите удалить курс "${course_title}" у пользователя с ID=${user_id}?`
      );
      if (answer) {
        try {
          const response = await axios.post(API + "/remove_access", {
            user_id,
            course_title,
          });
          console.log(response.data);
          await this.fetchUsers();
        } catch (e) {
          console.log(e);
        }
      }
    },
    async onSubmit() {
      console.log("@Submit", this.email, this.selected_course);
      try {
        const response = await axios.post(API + "/add_course_access", {
          email: this.email,
          course_id: this.selected_course,
        });
        console.log(response.data);
        this.success = "Успешно добавлено";
        setTimeout(() => {
          this.success = "";
        }, 5000);
        await this.fetchUsers();
      } catch (e) {
        console.log(e);
        this.error = e.response.data.message
          ? e.response.data.message
          : e.message;
        setTimeout(() => {
          this.error = "";
        }, 5000);
      }
    },
    async fetchCourses() {
      try {
        const response = await axios.get(API + "/courses");
        console.log(response.data);
        this.courses = response.data;
      } catch (e) {
        console.log(e);
      }
    },
    async fetchUsers() {
      try {
        const response = await axios.post(API + "/all_users", {
          id: this.$store.state.id,
        });
        console.log(response.data);
        this.users = response.data;
        this.filtered_users = this.users;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.fetchUsers();
    await this.fetchCourses();
  },
};
</script>

<style scoped>
.admin_panel {
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.admin_panel__search {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}
.admin_panel__search > span {
  display: flex;
  align-items: center;
}
.admin_panel__search > input,
.admin_panel__access_form > input {
  border-radius: 5px;
  background: #788fb35e;
  border: none;
  font-size: 18px;
  padding: 5px 10px;
}
.admin_panel__access_form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}
.admin_panel__access_form > select {
  border-radius: 5px;
  background: #788fb35e;
  border: none;
  font-size: 18px;
  padding: 5px 10px;
}

.admin_panel__access_form > button {
  width: 120px;
  height: 30.8px;
  border-radius: 5px;
  border: none;
  background: #0074a67a;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
.admin_panel__access_form > button:hover {
  transition: all 0.3s ease;
  transform: scale(1.1);
}

.admin_panel__table {
  border: 1px solid #ffeded;
  table-layout: fixed;
  width: 90%;
  padding-bottom: 20px;
}
.admin_panel__table th {
  font-weight: bold;
  padding: 5px;
  background: #fff6dd;
  border: 1px solid #dddddd;
  overflow: hidden;
}
.admin_panel__table td {
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: left;
  overflow: hidden;
}
.admin_panel__table tbody tr:nth-child(odd) {
  background: #e3e6ff;
}
.admin_panel__table tbody tr:nth-child(even) {
  background: #d2d7ff;
}
</style>
