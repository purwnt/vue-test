<script>
export default {
  name: 'Sidebar',
};
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__menu">
      <router-link class="sidebar__menu__item" to="/inbox">Inbox</router-link>
      <router-link class="sidebar__menu__item" to="/archive"
        >Archieve</router-link
      >
    </div>
    <div class="sidebar__menu">
      <a class="sidebar__menu__item">Logout</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  background-color: #373636;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__menu {
    display: flex;
    flex-direction: column;

    &__item {
      background-color: #fff;
      padding: 10px 15px;
      text-decoration: none;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 10px;
    }
  }
}
</style>
