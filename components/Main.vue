<template>
  <main>
    <b-row class="text-center">
      <b-col></b-col>
      <b-col cols="9">
        <project-info/>
      </b-col>
      <b-col></b-col>
    </b-row>
    <QuerySection 
      v-for="item in queries" 
      v-bind:header="item.header" 
      v-bind:code="item.code"
      v-bind:chartdata="item.chartdata"
      v-bind:options="{ responsive: true, 
                        maintainAspectRatio: false, 
                        scales: { 
                          yAxes: [{
                            ticks: {
                              beginAtZero: true,
                              fontFamily: 'Open Sans',
                              fontSize: 18
                              }
                          }],
                          xAxes: [{
                            ticks: {
                              fontFamily: 'Open Sans',
                              fontSize: 18
                              }
                          }]
                        },
                        legend: {
                          labels: {
                            fontFamily: 'Roboto',
                            fontSize: 18
                          }
                        } 
                      }" 
      v-bind:key="item.header" 
    />
  </main>
</template>

<script>
import ProjectInfo from "./ProjectInfo.vue";
import BContainer from "bootstrap-vue/es/components/layout/container";
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import QuerySection from "./QuerySection";

// https://github.com/nuxt/nuxt.js/issues/123#issuecomment-272246782
import queries from '~/static/queries.json'

export default {
  name: "Main",
  components: {
    ProjectInfo,
    BContainer,
    BRow,
    BCol,
    QuerySection
  },
  methods: {
    getHeader: function(item) {
      return this.item.header
    }
  },
  data() {
    return {
      queries
    };
  }
};
</script>

<style>
.qryHeader {
  padding: 50px;
}
</style>

