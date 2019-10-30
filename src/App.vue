<template>
  <div>
    <Login />
    <Footer />
  </div>
</template>

<script>

import Login from './pages/Login';
import Footer from './components/Footer'

export default {
  components: {
    Login,
    Footer,
  },
  data() {
    return {
    }
  }
}
</script>