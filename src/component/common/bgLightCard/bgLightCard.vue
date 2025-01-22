<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  
}>()
</script>

<style scoped >
/* From Uiverse.io by Yaseen549 */ 
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: #212121;
    box-shadow: 15px 15px 30px rgb(25, 25, 25),
             -15px -15px 30px rgb(60, 60, 60);
}
</style>