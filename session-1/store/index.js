export const state = () => ({
  loggedIn: false
})

export const mutations = {
  login (state, value) {
    state.loggedIn = value
  }
}
