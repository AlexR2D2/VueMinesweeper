<template>
  <section class="flex flex-column shadow-4">
    <div class="flex justify-between items-center bg-navy pv3">
      <div @click.prevent="settings" 
        class="flex items-center pointer w4 mh2"
        :class="[settingsVisible ? 'yellow' : 'white hover-moon-gray']">
        <settings class="center" :class="{'scale-down-center' : settingsAnimation}" size="3"></settings>
      </div>
      <div @click.prevent="reload" 
        class="flex items-center pointer white hover-moon-gray w4 mh2">
        <reload class="center" :class="{'rotate-360-cw' : reloadAnimation}" size="3"></reload>
      </div>
      <div @click.prevent="info" 
        class="flex items-center pointer w4 mh2"
        :class="[infoVisible ? 'yellow' : 'white hover-moon-gray']">
        <info class="center" :class="{'scale-down-center' : infoAnimation}" size="3"></info>
      </div>
    </div>
    <transition name="fade">
      <div v-if="infoVisible" class="relative popup noselect" v-on-click-outside.static="closeInfo">
        <div class="absolute shadow-4 overflow-y-auto w-100 pv3 bg-white flex flex-column items-center courier">
          <div class="pa3 gray">Build with <a href="https://nuxtjs.org" class="link underline-hover blue" target="_blank">Nuxt.js</a> framework</div>
          <div class="pa3 gray">CSS framework is <a href="http://tachyons.io" class="link underline-hover blue" target="_blank">Tachyons</a></div>
          <div class="pa3 gray">The source code in <a href="https://github.com/AlexR2D2/vue_portfolio_01" class="link underline-hover blue" target="_blank">GitHub</a></div>
          <div class="pa3 gray">MIT License</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="settingsVisible" class="relative popup noselect" v-on-click-outside.static="closeSettings">
        <div class="absolute shadow-4 overflow-y-auto w-100 pt3 bg-white flex flex-column sans-serif">
          <div class="ma3 flex justify-start items-center courier">
            <span class="w4">COLUMNS</span>
            <number-input v-model="columns" :min="minColumns" :max="maxColumns" @valid="columnsValid = $event"></number-input>
          </div>
          <div class="ma3 flex justify-start items-center courier">
            <span class="w4">ROWS</span>
            <number-input v-model="rows" :min="minRows" :max="maxRows" @valid="rowsValid = $event"></number-input>
          </div>
          <div class="ma3 flex justify-start items-center courier">
            <span class="w4">MINES</span>
            <number-input v-model="mines" :min="minMines" :max="maxMines" @valid="minesValid = $event"></number-input>
          </div>
          <configuration class="pa3 bg-near-white" :columns="columns" :rows="rows" :mines="mines"></configuration>
          <div class="flex items-center justify-center white pv3 dim"
            :class="[inputValid ? 'bg-green pointer' : 'bg-silver']"
            @click.prevent="apply">
            apply
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mixin as onClickOutside } from 'vue-on-click-outside'

  import Settings from '@/components/icons/Settings.vue'
  import Reload from '@/components/icons/Reload.vue'
  import Info from '@/components/icons/info.vue'
  import NumberInput from '@/components/NumberInput.vue'
  import Configuration from '@/components/Configuration.vue'

  export default {
    mixins: [onClickOutside],

    components: {
      'settings': Settings,
      'reload': Reload,
      'info': Info,
      'number-input': NumberInput,
      'configuration': Configuration,
    },

    data () {
      return {
        settingsAnimation: false,
        reloadAnimation: false,
        infoAnimation: false,
        settingsVisible: false,
        infoVisible: false,

        columns: this.$store.getters.defaultParams.columns,
        rows: this.$store.getters.defaultParams.rows,
        mines: this.$store.getters.defaultParams.mines,

        minColumns: this.$store.getters.defaultSettings.minColumns,
        maxColumns: this.$store.getters.defaultSettings.maxColumns,
        minRows: this.$store.getters.defaultSettings.minRows,
        maxRows: this.$store.getters.defaultSettings.maxRows,

        minMines: this.$store.getters.defaultSettings.minMines,
        
        columnsValid: true,
        rowsValid: true,
        minesValid: true,
      }
    },

    computed: {
      maxMines () { 
        return Math.round(this.columns * this.rows * this.$store.getters.defaultSettings.maxMinesPersent)
      },
      inputValid () {
        return this.columnsValid && this.rowsValid && this.minesValid
      }
    },

    watch: {
      settingsVisible (val, old) {
        this.$emit('is-open', val)
        if (val) this.infoVisible = false
      },
      infoVisible (val, old) {
        if (val) this.settingsVisible = false
      }
    },

    methods: {
      ...mapActions(['populate']),
      
      closeSettings () {
        this.settingsVisible = false
      },

      closeInfo () {
        this.infoVisible = false
      },

      settings () {
        if (this.settingsAnimation) return
        this.settingsAnimation = true
        setTimeout(function(self){ self.settingsAnimation = false}, 300, this);
        this.settingsVisible = !this.settingsVisible
      },

      reload () {
        if (this.reloadAnimation) return
        this.populate()
        this.reloadAnimation = true
        setTimeout(function(self){ self.reloadAnimation = false}, 300, this);
      },

      info () {
        if (this.infoAnimation) return
        this.infoAnimation = true
        setTimeout(function(self){ self.infoAnimation = false}, 300, this);
        this.infoVisible = !this.infoVisible
      },

      apply () {
        if (!this.inputValid) return
        this.$emit('apply', {columns: this.columns, rows: this.rows, mines: this.mines}) 
        this.settingsVisible = false
        this.infoVisible = false
      }
    }
  }
</script>

<style>
  .popup {
    z-index:10;
  }
</style>
