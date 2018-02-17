<template>
  <div class="flex justify-between courier silver noselect">
    <div>
      <span class="">CELLS: {{totalCells}}</span>
      <span class="ml3">MINES: {{mines}}</span>
    </div>
    <span class="ml3">MINED AT: {{minesPercent}}</span>
  </div>
</template>

<script>
  export default {
    props: [
      'columns',
      'rows',
      'mines'
    ],

    computed: {
      totalCells () {
        return this.columns * this.rows
      },
      minesPercent () {
        const percent = Math.round(this.mines * 100 / (this.columns * this.rows))
        return percent > 0 && percent < 100 ? percent + "%" : "" 
      },
    },
  }
</script>

