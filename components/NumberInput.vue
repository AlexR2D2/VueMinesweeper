<template>
  <section class="flex items-center justify-between">
    <input ref="input"
      :value="value"
      @input="updateValue($event.target.value)"
      class="input-reset f5 ma0 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-transparent no-spinners w3 tc" 
      type="number"/>
    <section class="flex items-center justify-between ml3">
      <div class="pointer pv1 ph3" @click.prevent="decrease"><chevron-left :class="{'scale-down-center' : leftAnimation}"></chevron-left></div>
      <div class="pointer pv1 ph3" @click.prevent="increase"><chevron-right :class="{'scale-down-center' : rightAnimation}"></chevron-right></div>
      <div class="ml3 f5" :class="[outOfrange ? 'red' : 'silver']">{{min}} - {{max}} </div>
    </section>
  </section>
</template>

<script>
  import ChevronRight from '@/components/icons/ChevronRight.vue'
  import ChevronLeft from '@/components/icons/ChevronLeft.vue'

  export default {
    components: {
      'chevron-right': ChevronRight,
      'chevron-left': ChevronLeft,
    },

    props: ['value', 'min', 'max'],

    data () {
      return {
        outOfrange: false,
        leftAnimation: false,
        rightAnimation: false,
        settings: this.$store.getters.defaultSettings
      }
    },

    methods: {
      updateValue (value) {
        if (value) {
          //const adjusted = this.adjust(value)
          //if (adjusted !== value) {
          //  this.$refs.input.value = adjusted
          //}
          this.outOfrange = value < this.min || value > this.max
          this.$emit('input', Number(value))
          this.outOfrange ? this.$emit('valid', false) : this.$emit('valid', true)
        } else {
          this.$refs.input.value = ""
          this.$emit('valid', false)
        }
      },

      decrease () {
        const decreased = this.value - 1;
        this.updateValue(decreased < this.min ? this.min : decreased)
        if (this.leftAnimation) return
        this.leftAnimation = true
        setTimeout(function(self){ self.leftAnimation = false}, 200, this);
      },

      increase () {
        const increased = this.value + 1;
        this.updateValue(increased > this.max ? this.max : increased)
        if (this.rightAnimation) return
        this.rightAnimation = true
        setTimeout(function(self){ self.rightAnimation = false}, 200, this);
      },

      adjust (value) {
        return value < this.min
          ? this.min
          : value > this.max
            ? this.max
            : value
      }
    }
  }
</script>
