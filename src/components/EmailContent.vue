<script>
export default {
  name: 'EmailContent',
  emits: ['closeModal', 'markAsRead', 'archive'],
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    email: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal', true);
    },
    markAsRead() {
      this.$emit('markAsRead', true);
    },
    archive() {
      this.$emit('archive', true);
    },
  },
};
</script>

<template>
  <div v-if="isOpen">
    <div @click="closeModal" class="outer-modal"></div>
    <div class="email-content">
      <div>
        <span class="email-content__close-button" @click="closeModal"
          >Close (Esc)</span
        >
      </div>
      <div class="email-content__actions">
        <button @click="markAsRead">Mark as read (r)</button>
        <button @click="archive">Archive (a)</button>
      </div>
      <h4>
        {{ email.subject }}
      </h4>
      <p>{{ email.content }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.outer-modal {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
.email-content {
  position: fixed;
  width: 40vw;
  padding: 20px;
  height: 100vh;
  background-color: #fff;
  right: 0;
  top: 0;

  &__close-button {
    cursor: pointer;
  }

  h4 {
    font-size: 23px;
    margin-top: 14px;
  }

  &__actions {
    display: flex;
    margin-top: 10px;
    gap: 10px;

    button {
      background-color: #f9f9f9;
      border: 1px solid #f0f0f0;
      padding: 8px 16px;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 10px;
    }
  }
}
</style>
