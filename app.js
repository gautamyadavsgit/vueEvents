const app = Vue.createApp({
  data() {
    return {
      name: "",
      counter: 0,
    };
  },
  methods: {
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
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
