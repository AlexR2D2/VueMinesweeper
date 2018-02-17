<template>
  <section class="mv3 tc w-100 white"
    :class="[gameOver ? gameSucces ? 'bg-green shadow-4' : 'bg-red shadow-4' : 'bg-white shadow-4']">
      <configuration 
        :columns="columns" 
        :rows="rows" 
        :mines="mines" 
        class="pa3"
        :class="[gameOver ? gameSucces ? 'bg-green white' : 'bg-red white' : 'bg-white gray']">
      </configuration>
  </section>
</template>

<script>
  import Configuration from '@/components/Configuration.vue'
  
  export default {
    components: {
      'configuration': Configuration
    },

    computed: {
      gameOver () { return this.$store.state.gameOver },
      gameSucces () { return this.$store.state.gameSucces },
      columns () { return this.$store.state.params.columns },
      rows () { return this.$store.state.params.rows },
      mines () { return this.$store.state.params.mines },
    }
  }
</script>

