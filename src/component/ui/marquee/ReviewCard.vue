<template>
  <figure
    class="bg-[#ffffff] relative w-64 cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-200"
  >
    <div class="flex flex-row items-center gap-2">
      <img
        :src="img"
        class="rounded-full"
        width="32"
        height="32"
        alt=""
      />
      <div class="flex flex-col">
        <span class="text-sm font-medium dark:text-white">
          {{ name }}
        </span>
        <p class="text-xs font-medium dark:text-white/40">{{ username }}</p>
      </div>
    </div>
    <blockquote class="mt-2 text-sm">{{ body }}</blockquote>
  </figure>
</template>

<script lang="ts" setup>
interface Props {
  img: string;
  name: string;
  username: string;
  body: string;
}

defineProps<Props>();
</script>