<template>
  <!-- <figure
    class="bg-[#ffffff] relative w-64 cursor-pointer rounded-xl border border-gray-200 bg-white hover:bg-gray-200"
  > -->
    <div class="flex w-40 flex-row items-center justify-center gap-2 overflow-hidden">
      <img
        :src="img"
        class="w-30 h-60 object-cover rounded-xl p-2"
        alt=""
      />
      <!-- <div class="flex flex-col">
        <span class="text-sm font-medium dark:text-white">
          {{ name }}
        </span>
        <p class="text-xs font-medium dark:text-white/40">{{ username }}</p>
      </div> -->
    </div>
    <!-- <blockquote class="mt-2 text-sm">{{ body }}</blockquote> -->
  <!-- </figure> -->
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