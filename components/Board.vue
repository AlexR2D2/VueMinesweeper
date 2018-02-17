<template>
  <section class="flex flex-column items-center relative">
    <div :class="{'cont': !enabled}"></div>
    <div class="pa2">
      <div v-for="(row, rowIndex) in squares" :key="rowIndex" class="flex">
        <div v-for="(item, colIndex) in row" :key="colIndex" class="ma1">
          <square :item="item" :enabled="enabled"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'
  import Square from '~/components/Square.vue'

  export default {
    layout: 'default',

    props: [
      'enabled'
    ],

    components: {
      'square': Square,
    },

    computed: {
      squares () {
        return this.$store.state.squares
      },
      gameState () {
        return this.$store.state.gameOver ? "game over" : "game in progress"
      },
      gameResult () {
        return this.$store.state.gameSucces ? "success" : "failed"
      }
    },

    methods: {
      ...mapActions(['']),
    }
  }
</script>


<style>
  .cont {
    z-index: 5;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
  }
  .cont:before {
    position: absolute;
    content: '';
    background:rgba(244, 244, 244, 0.6);
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>