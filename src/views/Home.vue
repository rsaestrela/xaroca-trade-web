<template>
  <div class="container">
    <div class="stock" v-for="stock in stocks" v-bind:key="stock.id">
        <Stock :stock="stock"/>
    </div>
  </div>
</template>

<script>
import Stock from '@/components/Stock.vue'

export default {
  name: 'Home',
  components: {
    Stock
  },
  data() {
    return {
      stocks: [
        {
          id: 1,
          code: "👆GSPC ",
          name: "S&P 500",
          value: 1234567.5,
          url: "https://finance.yahoo.com/quote/AAPL"
        },
        {
          id: 2,
          code: "🔥DJI",
          name: "Dow Jones Industrial Average",
          value: 1234567.5,
          url: "https://finance.yahoo.com/quote/GSPC"
        },
        {
          id: 3,
          code: "IXIC",
          name: "NASDAQ Composite",
          value: 1234567.5,
          url: "https://finance.yahoo.com/quote/IXIC"
        },
        {
          id: 4,
          code: "RUT",
          name: "Russell 2000",
          value: 1234567.5,
          url: "https://finance.yahoo.com/quote/RUT"
        },
        {
          id: 5,
          code: "BTC-USD",
          name: "Bitcoin USD",
          value: 1234567.5,
          url: "https://finance.yahoo.com/quote/BTC-USD"
        },
        {
          id: 6,
          code: "AMZN",
          name: "Amazon.com, Inc.",
          value: 1234567.5,
          url: "https://finance.yahoo.com/quote/AMZN"
        },
        {
          id: 7,
          code: "FB",
          name: "Facebook, Inc.",
          value: 1234567.5,
          url: "https://finance.yahoo.com/quote/FB"
        },
        {
          id: 8,
          code: "GOOG",
          name: "Alphabet Inc.",
          value: 1234567.5,
          url: "https://finance.yahoo.com/quote/GOOG"
        },
        {
          id: 9,
          code: "TSLA",
          name: "Tesla, Inc.",
          value: 1234567.5,
          url: "https://finance.yahoo.com/quote/TSLA"
        },
        {
          id: 10,
          code: "NFLX",
          name: "Netflix, Inc.",
          value: 1234567.5,
          url: "https://finance.yahoo.com/quote/NFLX"
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.container {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.stock {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    width: 21rem;
    background-color: #24292e;
    margin: 1rem;
    border-radius: 20px;
}

</style>
