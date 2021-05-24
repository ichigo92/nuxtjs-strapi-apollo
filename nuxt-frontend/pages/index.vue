<template>
  <div class="container">
    <div>
      <Logo />
      <div v-for="restaurant in restaurants" v-bind:key="restaurant.name">
        <h1 class="title">
          {{ restaurant.name }}
        </h1>
        <div v-for="category in restaurant.categories" v-bind:key="category.name">
          {{ category.name }}
        </div>
      </div>
      <div v-for="message in messages" v-bind:key="message.id">
        <h1 class="title">
          {{ message.greetings }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { restaurantsQuery, messageQuery } from '~/graphql/query'

export default Vue.extend({
  data() {
    return {
      restaurants: [],
      messages: []
    }
  },
  apollo: {
    restaurants: {
      prefetch: true,
      query: restaurantsQuery
    },
    messages: {
      prefetch: true,
      query: messageQuery
    }
  }
})

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
