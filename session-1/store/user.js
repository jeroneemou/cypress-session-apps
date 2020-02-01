export const state = () => ({
  username: 'admin'
})

export const mutations = {
  message (state, username) {
    state.username = username
  }
}
