import { defineStore } from 'pinia';

export const useEmailStore = defineStore('emailStore', {
  state: () => {
    return {
      data: [
        {
          id: 1,
          subject: 'Hello world',
          from: 'abc@mail.com',
          to: 'xyz@mail.com',
          content: 'lorem ipsum',
          date: Date.now(),
          isRead: false,
          isChecked: false,
          isArchive: false,
        },
        {
          id: 2,
          subject: 'Hello world 2',
          from: 'abc@mail.com',
          to: 'xyz@mail.com',
          content: 'lorem ipsum',
          date: Date.now(),
          isRead: false,
          isChecked: false,
          isArchive: false,
        },
        {
          id: 3,
          subject: 'Hello world 3',
          from: 'abc@mail.com',
          to: 'xyz@mail.com',
          content: 'lorem ipsum',
          date: Date.now(),
          isRead: false,
          isChecked: false,
          isArchive: false,
        },
        {
          id: 4,
          subject: 'Hello world 4',
          from: 'abc@mail.com',
          to: 'xyz@mail.com',
          content: 'lorem ipsum',
          date: Date.now(),
          isRead: true,
          isChecked: false,
          isArchive: true,
        },
      ],
    };
  },
  actions: {
    checkAll(isChecked) {
      this.data.forEach((el) => {
        el.isChecked = isChecked;
      });
    },
    markAsRead() {
      this.data.forEach((el) => {
        if (el.isChecked) {
          el.isRead = true;
        }
      });
      this.checkAll(false);
    },
    markAsArchive() {
      this.data.forEach((el) => {
        if (el.isChecked) {
          el.isArchive = true;
        }
      });
      this.checkAll(false);
    },
    markAsUnArchive() {
      this.data.forEach((el) => {
        if (el.isChecked) {
          el.isArchive = false;
        }
      });
      this.checkAll(false);
    },
    markOneAsRead(id) {
      this.data.forEach((el) => {
        if (el.id === id) {
          el.isRead = true;
        }
      });
    },
    archiveOne(id) {
      this.data.forEach((el) => {
        if (el.id === id) {
          el.isArchive = true;
        }
      });
    },
  },
});
