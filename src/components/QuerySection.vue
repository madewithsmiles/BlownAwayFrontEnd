<template>
  <b-container>
    <b-row class="text-center">
      <b-col></b-col>
      <b-col cols="12">
        <QueryHeader v-bind:header="header"/>
        <QueryCode v-bind:code="code"/>
        <QueryGraph v-bind:graph="graph"/>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import BContainer from "bootstrap-vue/es/components/layout/container";
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import QueryHeader from "./QueryHeader";
import QueryCode from "./QueryCode";
import QueryGraph from "./QueryGraph";

export default {
  name: "QuerySection",
  components: {
    BContainer,
    BRow,
    BCol,
    QueryHeader,
    QueryCode,
    QueryGraph
  },
  props: {
    header: String,
    code: String,
    graph: String
  }
};
</script>

<style>
</style>
