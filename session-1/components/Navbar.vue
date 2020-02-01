<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <div class="buttons">
          <nuxt-link v-if="this.$store.state.loggedIn" class="button" to="/profile">
            <span class="icon">
              <i class="fas fa-users-cog" />
            </span>
            <h1>admin</h1>
          </nuxt-link>
        </div>
      </div>

      <a
        @click="toggle"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div id="navbarBasicExample" v-bind:class="{'is-active': this.$store.state.navbar.active }" class="navbar-menu">
      <div v-if="this.$store.state.loggedIn" class="navbar-start">
        <nuxt-link class="navbar-item" to="/">
          Home
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/filters">
          Filters
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/blog">
          Blog
        </nuxt-link>
      </div>

      <div v-if="!this.$store.state.loggedIn" class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button is-light" to="/login">
              Log in
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggle () {
      this.$store.commit('navbar/toggle', !this.$store.state.navbar.active)
    }
  }
}
</script>

<style>
</style>
