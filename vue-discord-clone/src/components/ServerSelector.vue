<script setup lang="ts">
import ServerIcon from '@/components/ServerIcon.vue';
</script>

<template>
  <div class="bg-[#1C1D1F] flex flex-col gap-y-2 items-center">
    <ServerIcon icon="DiscordLogo" class="mt-3 text-[#DADEE1]" />
    <hr class="border-[#2F3033] w-5/12 border-[1.5px]" />
    <ServerIcon label="HW" selected />
    <ServerIcon icon="Plus" class="text-[#249858]" />
    <ServerIcon icon="Compass" class="text-[#249858]" />
    <hr class="border-[#2F3033] w-5/12 border-[1.5px]" />
    <ServerIcon icon="Download" class="text-[#249858]" />
  </div>
</template>