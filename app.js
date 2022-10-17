const app = Vue.createApp({
  data() {
    return {
      name: "",
      counter: 0,
    };
  },
  computed: {
    setName() {
      if (this.name === '') {
        return this.name = '';
      }
      return this.name + " " + 'Yadav';
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetName() {
      this.name = '';
    }
  }
});

app.mount('#events');
