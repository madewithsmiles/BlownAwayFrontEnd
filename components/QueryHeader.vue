<template>
    <div class="queryHeader">
        <h1>{{header}}</h1>
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
    padding: 5px;
    margin-bottom: 15px;
}
</style>
