<template>
    <!-- <pre v-html="getCode()" class="myCodePre"> -->
      <!-- <highlight-code lang="SQL"> -->
        <pre v-highlightjs="code" style="text-align: start; font-size: 20px"><code class="SQL"></code></pre>
          <!-- <span v-html="code" /> -->
      <!-- </highlight-code> -->
    <!-- </pre> -->
  <!-- <img :src="`${publicPath}Code/${code}`" width="750px"/> -->
  <!-- <pre> -->
  <!-- </pre> -->
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
  },
  methods: {
    getCode: function() {
      let currentCode = this.code;
      let finalString = "";
      currentCode.forEach(lineOfCode => {
        finalString += lineOfCode;
        finalString += "<br>";
      });

      return finalString;
    }
  }
};
</script>

<style>
</style>
