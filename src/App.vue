<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<template>
  <div class="main">
    <div class="main__side">
      <Sidebar></Sidebar>
    </div>
    <div class="main__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: space-between;

  &__side {
    width: 300px;
  }

  &__content {
    width: 100%;
  }
}
</style>
