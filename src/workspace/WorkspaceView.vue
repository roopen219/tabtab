<template>
  <WorkspaceTabList :tabs="tabs" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import WorkspaceTabList from '@/workspace/WorkspaceTabList.vue';

export default defineComponent({
  name: 'WorkspaceView',
  components: { WorkspaceTabList },
  setup() {
    const tabs = ref<string[]>([]);
    const getTabs = async () => {
      tabs.value = ['a', 'b'];
    };

    onMounted(getTabs);

    return {
      tabs,
      getTabs,
    };
  },
});
</script>
