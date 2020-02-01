export const state = () => ({
  message: null
})

export const mutations = {
  message (state, message) {
    state.message = message
  }
}
