<template>
  <main>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" data-cy="title">
            Hello admin!
          </h1>
          <h2 class="subtitle">
            Here is the stuff I know about you!
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <nav class="level">
          <div data-cy="statusLevel" class="level-item has-text-centered">
            <div>
              <p class="heading">
                Status
              </p>
              <p class="title has-text-success">
                Active
              </p>
            </div>
          </div>
          <div data-cy="roleLevel" class="level-item has-text-centered">
            <div>
              <p class="heading">
                Role
              </p>
              <p class="title">
                {{ role }}
              </p>
            </div>
          </div>
          <div data-cy="projectLevel" class="level-item has-text-centered">
            <div>
              <p class="heading">
                Projects
              </p>
              <p class="title">
                14
              </p>
            </div>
          </div>
          <div data-cy="standingLevel" class="level-item has-text-centered">
            <div>
              <p class="heading">
                Standing
              </p>
              <p v-if="mood === '1'" class="title has-text-primary">
                Good <i class="fas fa-thumbs-up" />
              </p>
              <p v-if="mood === '0'" class="title has-text-warning">
                Bad <i class="fas fa-thumbs-down" />
              </p>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input v-model="name" data-cy="nameInput" class="input" type="text" placeholder="Text input">
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left">
            <input
              v-model="username"
              data-cy="usernameInput"
              class="input"
              type="text"
              placeholder="Text input"
              disabled
            >
            <span class="icon is-small is-left">
              <i class="fas fa-user" />
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              v-model="email"
              v-bind:class="{'is-danger': !validEmail }"
              data-cy="emailInput"
              class="input"
              type="email"
              placeholder="Email input"
            >
            <span class="icon is-small is-left">
              <i class="fas fa-envelope" />
            </span>
            <span v-if="!validEmail" class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle" />
            </span>
          </div>
          <p v-if="!validEmail" class="help is-danger">
            This email is invalid
          </p>
        </div>

        <div class="field">
          <label class="label">Role</label>
          <div class="control">
            <div class="select">
              <select v-model="role" data-cy="roleInput">
                <option>Administrator</option>
                <option>User</option>
                <option>Guest</option>
                <option>Developer</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">About</label>
          <div class="control">
            <textarea data-cy="aboutInput" class="textarea" placeholder="Textarea">Someone dreams about apples, I dream of being a millionaire. World sucks. Beer is good.</textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input v-model="mood" data-cy="moodInputHappy" type="radio" name="mood" value="1">
              Happy
            </label>
            <label class="radio">
              <input v-model="mood" data-cy="moodInputSad" type="radio" name="mood" value="0">
              Sad
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button data-cy="submitButton" class="button is-link">
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  },
  data () {
    return {
      name: 'Peter Parker',
      username: 'admin',
      email: 'spiderman@got.it',
      role: 'User',
      mood: '0'
    }
  },
  computed: {
    validEmail () {
      // eslint-disable-next-line
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.email)
    }
  }
}
</script>

<style>
</style>
