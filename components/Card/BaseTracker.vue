<template>
  <div
    class="flex flex-col items-start cursor-pointer p-3 border-(solid rounded-md 1 gray-200) hover:border-(brand-accent) transition-duration-100 base-card"
  >
    <div
      class="p-3 mb-3 border-(solid 1 rounded-xl transparent) transition-duration-100 icon"
    >
      <div class="i-mdi-run text-4xl" />
    </div>
    <div
      class="text-(size-xs bluegray) font-(mono 300) flex-grow-1"
      v-text="hint"
    />
    <div class="text-size-xl font-mono flex-grow-1" v-text="label" />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  hint: {
    type: String,
    default: "",
  },
});
</script>
<style scoped lang="scss">
.base-card {
  .icon {
    --at-apply: bg-brand-secondary;
  }
  &:hover {
    .icon {
      --at-apply: border-brand-accent bg-brand-accent;
    }
  }
}
</style>
