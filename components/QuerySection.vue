<template>
    <b-row class="text-center">
      <b-col></b-col>
      <b-col cols="12">
        <div class="myQuerySection">
          <QueryHeader v-bind:header="header"/>
          <!-- <QueryImageResult v-bind:imgSrc="imgSrc"/> -->
          <QueryCode v-bind:code="getCode"/>
          <!-- <QueryGraph v-bind:graph="graph"/> -->
          <!-- <QueryBar v-bind:chartdata="chartdata" v-bind:options="options" /> -->
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
import QueryBar from './QueryBar';
// import QueryGraph from "./QueryGraph";

export default {
  name: "QuerySection",
  components: {
    // BContainer,
    BRow,
    BCol,
    QueryHeader,
    QueryImageResult,
    QueryCode,
    // QueryGraph
    QueryBar,
  },
  computed: {
    getCode() {
      let currentCode = this.code;
      let finalString = "";
      currentCode.forEach(lineOfCode => {
        finalString += lineOfCode;
        finalString += "\n";
      });

      return finalString;
    }
  },
  props: {
    header: String,
    imgSrc: String,
    code: Array,
    graph: String,
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  }
};
</script>
<style>
.myQuerySection {
  padding: 20px;
  margin: 50px;
}
</style>
