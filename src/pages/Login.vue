<template>
    <div class="hero is-primary is-fullheight">
        <div class="hero-body">
            <LoginForm />
        </div>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm';

export default {
    name: 'Login',
    components: {
        LoginForm
    },
}
</script>