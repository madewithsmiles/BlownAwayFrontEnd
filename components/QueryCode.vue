<template>
    <div>
        <!-- <img :src="`${publicPath}Code/${code}`" width="750px"/> -->
        <!-- <pre> -->
        <!-- </pre> -->
    </div>
</template>

<script>
export default {
    name: "QueryCode",
    props: {
        code: String
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
