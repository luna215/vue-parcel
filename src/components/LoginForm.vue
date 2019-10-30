<template>
    <section class="container">
      <div class="columns is-centered">
        <div class="columns">
          <form
            class="box" 
            v-on:submit.prevent="doSomething">
            <b-field label="Email">
              <b-input 
                  v-model="email"
                  value="pluna@dealercontrol.com"></b-input>
            </b-field>
            <b-field label="Password">
              <b-input
                  v-model="password"
                  type="password"
                  value="iwantmytreasure"
                  password-reveal></b-input>
            </b-field>
            <button 
              class="button is-primary"
              type="submit">Primary</button>
          </form>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    doSomething() {
      alert(`email: ${this.email}, password: ${this.password}`); 
    }
  }
}
</script>