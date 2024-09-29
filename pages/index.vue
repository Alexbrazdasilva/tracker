<template>
  <div class="pb-10">
    <div class="container gy-4">
      <div class="row g-4">
        <div v-for="index in 6" :key="index" class="col-3">
          <card-base-tracker
            class="accent-transparent"
            :hint="`${index} items`"
            label="Lorem ipsum"
          />
        </div>
        <div class="col-12">
          <h5 class="text-(brand-primary 5) font-mono mt-3">Last activities</h5>
        </div>
        <div v-for="index in 10" :key="index" class="col-6">
          <card-base-tracker
            class="accent-transparent"
            :hint="`${index} items`"
            label="Lorem ipsum"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
