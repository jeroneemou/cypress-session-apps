export const state = () => ({
  active: false
})

export const mutations = {
  toggle (state, value) {
    state.active = value
  }
}
