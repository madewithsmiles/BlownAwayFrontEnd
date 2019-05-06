<template>
  <pre v-highlightjs="code" style="text-align: start; font-size: 20px"><code class="SQL"></code></pre>
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
    };
  }
};
</script>

<style>
</style>
