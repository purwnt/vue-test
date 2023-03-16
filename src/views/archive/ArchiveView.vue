<script>
import { mapStores, mapActions } from 'pinia';
import EmailContent from '../../components/EmailContent.vue';
import Header from '../../components/Header.vue';
import { useEmailStore } from '../../stores/email';

export default {
  name: 'InboxView',
  components: {
    Header,
    EmailContent,
  },
  data() {
    return {
      isCheckedAll: false,
      isReadEmailOpen: false,
      currentlyReadEmail: null,
    };
  },
  computed: {
    ...mapStores(useEmailStore),
  },
  watch: {
    isCheckedAll(isChecked) {
      this.emailStoreStore.checkAll(isChecked);
    },
  },
  methods: {
    markAsUnArchive() {
      this.emailStoreStore.markAsUnArchive();
    },
    openReadEmailModal(id) {
      const selectedEmail = this.emailStoreStore.data.filter(
        (el) => el.id == id
      );
      this.currentlyReadEmail = selectedEmail[0];
      this.isReadEmailOpen = true;
    },
    closeEmailModal() {
      this.isReadEmailOpen = false;
    },
    markOneAsRead() {
      this.emailStoreStore.markOneAsRead(this.currentlyReadEmail.id);
    },
    archiveOne() {
      this.emailStoreStore.archiveOne(this.currentlyReadEmail.id);
    },
  },
  mounted() {
    window.addEventListener('keydown', (event) => {
      if (event.code === 'KeyU') {
        this.markAsUnArchive();
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener('keydown', null);
  },
};
</script>

<template>
  <div class="inbox">
    <Header
      heading="Inbox"
      :subheading="`Email Selected (${
        emailStoreStore.data.filter((el) => el.isChecked && el.isArchive).length
      })`"
    ></Header>
    <div class="inbox__tools">
      <input
        v-model="isCheckedAll"
        class="inbox__tools__checkbox"
        type="checkbox"
        name="checkAll"
      />
      <button @click="markAsUnArchive()">Unarchive (u)</button>
    </div>
    <div class="inbox__content">
      <div
        v-for="item in emailStoreStore.data.filter((el) => el.isArchive)"
        :key="item"
        class="inbox__content__item"
        :class="{ 'inbox__content__item--read': item.isRead }"
      >
        <input
          v-model="item.isChecked"
          class="inbox__content__item__checkbox"
          type="checkbox"
          name="check"
        />
        <p class="inbox__content__item__subject">
          {{ item.subject }} {{ item.isArchive }}
        </p>
      </div>
    </div>

    <EmailContent
      @markAsRead="markOneAsRead(id)"
      @archive="archiveOne(id)"
      :email="currentlyReadEmail"
      @closeModal="closeEmailModal"
      :isOpen="isReadEmailOpen"
    ></EmailContent>
  </div>
</template>

<style lang="scss" scoped>
.inbox {
  padding: 15px 50px;

  &__tools {
    display: flex;
    gap: 10px;
    justify-content: flex-start;

    &__checkbox {
      height: 18px;
      width: 18px;
      margin-left: 15px;
      margin-right: 5px;
      margin-top: 8px;
    }

    button {
      background-color: #f9f9f9;
      border: 1px solid #f0f0f0;
      padding: 8px 16px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 28px 0;

    &__item {
      display: flex;
      background-color: #f9f9f9;
      border: 1px solid #f0f0f0;
      border-radius: 5px;
      margin-bottom: 8px;
      align-content: center;
      padding: 0 10px;

      &--read {
        opacity: 0.5;
      }

      &__checkbox {
        height: 18px;
        width: 18px;
        margin-right: 15px;
        margin-top: 13px;
      }

      &__subject {
        cursor: pointer;
      }
    }
  }
}
</style>
