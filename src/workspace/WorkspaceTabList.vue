<template>
  <div v-for="(tab, index) in tabs" :key="index">
    {{ tab }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { array } from 'vue-types';

export default defineComponent({
  name: 'WorkspaceTabList',
  props: {
    tabs: array<string>(),
  },
});
</script>

<style lang="scss"></style>
