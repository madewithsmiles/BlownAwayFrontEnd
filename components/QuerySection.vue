<template>
    <b-row class="text-center">
      <b-col></b-col>
      <b-col cols="12">
        <div class="myQuerySection">
          <QueryHeader v-bind:header="header"/>
          <!-- <QueryImageResult v-bind:imgSrc="imgSrc"/> -->
          <QueryCode v-bind:code="code"/>
          <QueryGraph v-bind:graph="graph"/>
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
</template>

<script>
// import BContainer from "bootstrap-vue/es/components/layout/container";
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import QueryHeader from "./QueryHeader";
import QueryImageResult from "./QueryImageResult";
import QueryCode from "./QueryCode";
import QueryGraph from "./QueryGraph";

export default {
  name: "QuerySection",
  components: {
    // BContainer,
    BRow,
    BCol,
    QueryHeader,
    QueryImageResult,
    QueryCode,
    QueryGraph
  },
  props: {
    header: String,
    imgSrc: String,
    code: String,
    graph: String
  }
};
</script>
<style>
.myQuerySection {
  padding: 20px;
  margin: 50px;
}
</style>
