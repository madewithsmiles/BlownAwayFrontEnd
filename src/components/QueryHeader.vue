<template>
    <div class="queryHeader">
        <h1>Hello from QueryHeader</h1>
        <!-- <h1>{v-bind:header}</h2> -->
    </div>
</template>

<script>
export default {
    name: "QueryHeader",
    props: {
        header: String
    }
}
</script>

<style>
.queryHeader {
    background-color: cornflowerblue;
    color: white;
}
</style>
