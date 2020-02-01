<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <!-- Error message window -->
            <article v-if="this.$store.state.login.message" data-cy="errorMessage" class="message is-danger">
              <div class="message-header">
                <p>{{ this.$store.state.login.message }}</p>
              </div>
            </article>
            <!-- Form for login -->
            <form @submit="submit" class="box">
              <div class="field">
                <label for="" class="label">Username</label>
                <div class="control">
                  <input
                    v-model="user"
                    data-cy="loginInput"
                    type="text"
                    placeholder="e.g. admin"
                    class="input"
                    required
                  >
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control">
                  <input
                    v-model="password"
                    data-cy="loginPassword"
                    type="password"
                    placeholder="*******"
                    class="input"
                    required
                  >
                </div>
              </div>
              <div class="field">
                <button data-cy="submitButton" class="button is-success">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  },
  data () {
    return {
      user: null,
      password: null
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()
      if (this.user === 'admin' && this.password === 'asdf1234') {
        this.$store.commit('login/message', null)
        this.$store.commit('login', true)
        this.$router.push({
          path: '/'
        })
      } else {
        this.$store.commit('login/message', 'Invalid credentials')
      }
    }
  }
}
</script>

<style>
</style>
