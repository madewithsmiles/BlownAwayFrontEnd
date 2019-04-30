<template>
    <div>
        <img v-bind:src="`${publicPath}Placeholders/${imgSrc}`">
    </div>
</template>

<script>
export default {
    name: "QueryGraph",
    props: {
        imgSrc: String
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style>

</style>
