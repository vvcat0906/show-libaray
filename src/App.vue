<template>
  <router-view></router-view>
  <div id="react-container"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
  body {
    p {
      color: red;
    }
  }
</style>
