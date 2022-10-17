const app = Vue.createApp({
  data() {
    return {
      name: "",
      counter: 0,
      lastname:'',
      fullname:'',
    };
  },
  watch:{
    // name(value){
    //  this.fullname = value + " " + this.lastname;
    // },
    // lastname(value){
    //   this.fullname = this.name + " " +value;
    // }

    counter(value){
     if(value > 50){
      const that = this;
       setTimeout(function(){
        that.counter = 0;
       },2000)
     }
    }

  },
  computed: {
    setName() {
      if (this.name === '') {
        return this.name = '';
      }
      return this.name + " " + this.lastname;
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
