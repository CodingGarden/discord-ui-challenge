<script setup lang="ts">
import ChannelSelector from '@/components/ChannelSelector.vue';
import ServerSelector from '@/components/ServerSelector.vue';
</script>

<template>
  <div className="grid h-full grid-cols-[minmax(70px,4%)_minmax(240px,13%)_1fr]">
    <ServerSelector />
    <ChannelSelector />
    <div class="bg-[#2C2D31]"></div>
  </div>
</template>

<style>
</style>
