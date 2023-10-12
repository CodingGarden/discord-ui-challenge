<script setup lang="ts">
import UIIcon from '@/components/UIIcon.vue';
</script>

<template>
  <div class="bg-[#27282B] grid h-full grid-rows-[48px_1fr_48px]">
    <div class="border-b-2 w-full border-b-[#1D1E21] text-[#F0F1F5] flex items-center justify-between px-4">
      Hello World
      <UIIcon icon="ArrowDown" />
    </div>
    <div></div>
    <div class="bg-[#202123] flex items-center pl-2 pr-4 text-[#FFFCFD] gap-2">
      <div class="bg-[#F39C3B] h-8 w-8 rounded-full flex items-center justify-center">
        <UIIcon icon="DiscordLogo" class="scale-75" />
      </div>
      <div class="flex flex-col">
        <span>User</span>
        <span class="text-xs text-[#84878C]">another_user1</span>
      </div>
      <div class="flex flex-grow justify-between text-[#AFB0B7]">
        <UIIcon icon="Mute" />
        <UIIcon icon="Headphones" />
        <UIIcon icon="Settings" />
      </div>
    </div>
  </div>
</template>