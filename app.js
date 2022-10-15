const app = Vue.createApp({
  data() {
    return {
      name : "",
      counter: 0,
      confirmedName:'',
    };
  },
  methods: {
    setconfirmedName(){
      this.confirmedName = this.name;
    },
    setName(event,lastname) {
    this.name = event.target.value + " " + lastname;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  }
});

app.mount('#events');
