<template>
  <main>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" data-cy="title">
            Articles
          </h1>
          <h2 class="subtitle">
            Like reading?
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="select">
          <select v-model="order" data-cy="orderInput">
            <option value="asc">
              Ascending
            </option>
            <option value="desc">
              Descending
            </option>
          </select>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <article v-for="item in articles" v-bind:key="item" :data-cy="'articleItem' + item" :data-item="item" class="message">
          <div class="message-header">
            <p>Article {{ item }}</p>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      order: 'desc',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    }
  },
  computed: {
    articles () {
      return this.order === 'asc' ? this.items : this.items.slice(0).reverse()
    }
  }

}
</script>

<style>
</style>
