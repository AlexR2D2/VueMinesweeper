<template>
  <div class="relative h3 w3 flex flex-column justify-center items-center noselect" :class="cellDynamic"
    @click.left.prevent="leftClick"
    @contextmenu.prevent="rightClick"
    @dblclick="doubleClick">

    <transition name="fade"
      @before-leave="beforeLeave"
      @after-leave="afterLeave">
      <div v-if="item.isOpened" key="opened" class="flex items-center"> 
        <div v-if="openedVisible" class="flex items-center">
          <transition name="fade">
            <div v-if="item.hasMine" key="bomb" class="flex items-center">
              <bomb class="red"></bomb>
            </div>
            <div v-else key="free" class="avenir gray f4 flex items-center">
              <span v-if="item.neighborMineCount > 0">{{item.neighborMineCount}}</span>
            </div>
          </transition>
        </div>
      </div>
      <div v-else key="closed" class="flex items-center">
        <flag v-if="item.hasFlag" class="red"></flag>
      </div>
    </transition>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Close from '@/components/icons/Close.vue'
  import Flag from '@/components/icons/Flag.vue'

  export default {
    components: {
      'bomb': Close,
      'flag': Flag,
    },

    props: [
      'item',
      'enabled'
    ],

    computed: {
      cellDynamic () {
        return this.item.isOpened 
          ? this.item.hasMine 
            ? 'bg-near-white ba b--light-gray' 
            : 'bg-near-white ba b--light-gray' + (this.enabled ? ' pointer' : '')
          : 'bg-white' + (this.enabled ? ' box bg-white pointer' : '')
      }
    },

    data () {
      return {
        openedVisible: false,
      }
    },

    methods: {
      ...mapActions(['check', 'setFlag', 'multiCheck']),
      
      leftClick (event) {
        if (!this.enabled) return
        this.check(this.item)
      },
      
      rightClick (event) {
        if (!this.enabled) return
        if (this.item.isOpened) {
          this.multiCheck(this.item)
        } else {
          this.setFlag(this.item)
        }
      },

      doubleClick (event) {
        if (!this.enabled) return
      },

      afterLeave () {
        this.openedVisible = true
      },

      beforeLeave () {
        this.openedVisible = !this.item.hasFlag
      },

    }
  }
</script>

<style>
  .pa3_5{
    padding:20px;
    padding:1.5rem
  }
  .box {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    -webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .box::after {
    content: "";
    position: absolute;
    border-radius: 3px;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .box:hover {
    -webkit-transform: scale(1.15, 1.15);
    transform: scale(1.15, 1.15);
    z-index: 1;
  }
  .box:hover::after {
      opacity: 1;
  }
</style>
