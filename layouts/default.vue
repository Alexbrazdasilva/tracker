<template>
  <div>
    <TheHeader />
    <slot></slot>
  </div>
</template>
<script setup>
import TheHeader from "~/layouts/components/TheHeader.vue";
</script>
