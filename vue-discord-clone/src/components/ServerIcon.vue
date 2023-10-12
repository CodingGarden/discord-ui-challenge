<script setup lang="ts">
import { Icons, type IconType } from '@/Icons';

const props = defineProps<{ icon?: IconType, label?: string, selected?: boolean }>();
</script>

<template>
  <div v-if="!selected" class="bg-[#2C2D31] rounded-full h-12 w-12 flex justify-center items-center text-white">
    <component v-if="props.icon" :is="Icons.get(props.icon)"></component>
    <span v-else>{{ props.label }}</span>
  </div>
  <div v-else class="flex justify-center items-center relative w-full">
    <div class="h-full absolute left-0 top-0 flex justify-center items-center">
      <div class="h-5/6 w-[3px] bg-white rounded-md"></div>
    </div>
    <div class="bg-[#5160D5] rounded-2xl h-12 w-12 flex justify-center items-center text-white">
      <component v-if="props.icon" :is="Icons.get(props.icon)"></component>
      <span v-else>{{ props.label }}</span>
    </div>
  </div>
</template>