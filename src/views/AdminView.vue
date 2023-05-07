<template>
  <div class="admin_panel">
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in filtered_users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    users: null,
    filtered_users: null,
    search: "",
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
    async fetchUsers() {
      try {
        const response = await axios.post("http://localhost:3000/all_users", {
          id: this.$store.state.id,
        });
        console.log(response.data);
        this.users = response.data;
        this.filtered_users = this.users;
        for (let i = 0; i < 100; i++) {
          this.filtered_users.push({
            id: 0,
            name: "test",
            email: "test@test.com",
            title: "TEST",
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.fetchUsers();
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
.admin_panel__search > input {
  border-radius: 5px;
  background: #788fb35e;
  border: none;
  font-size: 18px;
  padding: 5px 10px;
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
