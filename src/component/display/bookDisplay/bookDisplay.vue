<template>
    <div class="w-full h-full relative flex-col items-center flex">
        <div class="flex flex-wrap gap-6 justify-center">
            <div class="flex" v-for="book in books">
                <CardSpotlight>
                    <div class="p-10">
                        <Book size="sm">
                            <img class="w-full h-full" :src="book.imageUrl">
                        </Book>
                    </div>
                </CardSpotlight>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Book from "@mycomponent/ui/book/Book.vue";
import CardSpotlight from "@mycomponent/ui/card-spotlight/CardSpotlight.vue";
const books = [
    {
        imageUrl: "https://assets.literal.club/cover/1/ckw3r8g291779151evhj1b8j2jw.jpg",
    },
    {
        imageUrl: "https://assets.literal.club/2/ckgeajvpx368170zb8rawstzjs.jpg"
    },
    {
        imageUrl: "https://assets.literal.club/2/cks8troqw15622213st85pjc3bk.jpg"
    },
    {
        imageUrl: "https://assets.literal.club/2/ckxbjghvi2961920iff5zufjg4n.jpg"
    }
]
</script>

<style scoped lang="scss">

</style>
