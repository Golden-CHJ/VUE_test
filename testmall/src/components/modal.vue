<template>
  <div>
    <div class="md-modal modal-msg md-modal-transition " v-bind:class="{'md-show':mdShow }">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close" @click="closeModal">关闭</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <slot name="message">你确认要删除此条数据吗?</slot>
          </div>
          <div class="btn-wrap">
            <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-if="mdShow" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
  name: 'modal',
    props: ['mdShow'],
    methods:{
      closeModal(){
          this.$emit('close');
      }
    }
}
</script>
<style>


</style>
