const { createApp } = Vue;

createApp({
  data() {
    return {
      email: '',
      arrEmail: [],
    }
  },
  created() {
    this.generateEmail()
  },
  methods: {
    generateEmail() {
      for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            console.log(resp);
            this.email = resp.data.response;
            this.arrEmail.push(resp.data.response);
            console.log(this.arrEmail)
          });
      }
    }
  }
}).mount('#app');