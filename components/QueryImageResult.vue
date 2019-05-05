<template>
    <div>
        <img v-bind:src="`${assetPath}${imgSrc}`">
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
            publicPath: process.env.BASE_URL,
            assetPath: "~assets/"
        }
    }
}
</script>

<style>

</style>
