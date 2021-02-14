<template>
  <div class="stock-content" v-on:click="link(stock.url)">
    <div class="market-code">
      {{ stock.code }}
    </div>
    <div class="market-name">
      {{ stock.name }}
      </div>
    <div class="value">{{ stock.value }}</div>
  </div>
</template>

<script>
export default {
  name: 'Stock',
  props: {
    stock: Object
  },
  methods: {
    link(url) {
      window.location = url;
    }
  }
}
</script>

<style scoped lang="scss">

.stock-content {
  cursor: pointer;
  height: 200px;
}

.market-code {
  font-size: 2rem;
  margin: 1rem;
  margin-bottom: 0;
  color: white;
  line-height: 1.5rem;
  display: inline-block;
  width: 100%;
}

.market-name {
  margin: 1rem;
  margin-top: 0;
  color: white;
  width: 100%;
}

.value {
  font-size: 2rem;
  margin: 1rem;
  margin-bottom: 0;
  color: white;
  line-height: 1.5rem;
}

</style>
