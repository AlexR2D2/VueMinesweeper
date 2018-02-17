<template>
  <section class="flex justify-center mb7">
    <section class="flex flex-column items-center">
      <section>
        <game-menu class="mt4 mb3" @apply="setNewParams" @is-open="menuOpen = $event"></game-menu>
        <scores class="mt4 mb3 w-100"></scores>
      </section>
      <board :enabled="!menuOpen"></board>
    </section>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'
  import Menu from '~/components/Menu.vue'
  import Scores from '~/components/Scores.vue'
  import Board from '~/components/Board.vue'

  export default {
    layout: 'default',

    components: {
      'game-menu': Menu,
      'scores': Scores,
      'board': Board,
    },

    mounted () {
      this.$store.dispatch('populate')
    },

    data () {
      return {
        menuOpen: false
      } 
    },

    computed: {
      gameState () {
        return this.$store.state.gameOver ? "game over" : "game in progress"
      },
      gameResult () {
        return this.$store.state.gameSucces ? "success" : "failed"
      }
    },

    methods: {
      ...mapActions(['']),

      setNewParams (params) {
        this.$store.dispatch('populate', params)
      },
    }
  }
</script>
