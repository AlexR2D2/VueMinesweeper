<template>
  <section class="flex justify-center pv7">
    <hello/>
  </section>
</template>

<script>
import Hello from '~/components/Hello.vue'

export default {
  layout: 'default',

  components: {
    'hello': Hello,
  }
}
</script>
