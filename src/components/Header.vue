<script>
export default {
  name: 'Header',
  props: {
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="header">
    <h1 class="header__heading">{{ heading }}</h1>
    <h3 class="header__subheading">{{ subheading }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__heading {
    font-size: 24px;
    font-weight: normal;
  }

  &__subheading {
    font-size: 30px;
    font-weight: bold;
    margin-top: 0px;
  }
}
</style>
