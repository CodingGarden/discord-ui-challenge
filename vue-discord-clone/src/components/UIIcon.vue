<script setup lang="ts">
import { Icons, type IconType } from '@/Icons';

const props = defineProps<{ icon: IconType }>();
</script>

<template>
  <component v-if="props.icon" :is="Icons.get(props.icon)"></component>
</template>