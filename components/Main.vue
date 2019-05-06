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
      v-bind:key="item" 
    />
    <!-- <QuerySection 
        class="qryHeader" 
        header="Top 10 Average 
        Magnitude of Tornadoes" 
        code="SELECT * FROM *" 
        graph="Beautiful graphs" 
    /> -->
    <!-- <QuerySection
                    v-for="q in QuerySections"
                    v-bind:header="q.title"
                    v-bind:imgSrc="q.imgSrc"
                    v-bind:key="q.title"
                >
    </QuerySection> -->
    <!-- v-bind:code="q.code" -->
  </main>
</template>

<script>
import ProjectInfo from "./ProjectInfo.vue";
import BContainer from "bootstrap-vue/es/components/layout/container";
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import QuerySection from "./QuerySection";

import queries from '~/static/queries.json'
console.log({queries})
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
    //   QuerySections: [
    //     {
    //       title: "Top 10 States by Total Number of Tornadoes Since 1950",
    //       imgSrc: "TotalNumberOfTornadoes.png",
    //       code: "totaltornado.png"
    //     },
    //     {
    //       title: "Top 10 States by Average Magnitude of Tornadoes",
    //       imgSrc: "Top10AverageMagnitude.png",
    //       code: "totalmagnitude.png"
    //     },
    //     {
    //       title: "Top 10 States by Power Score",
    //       imgSrc: "PowerScore.png",
    //       code: "powersql.png"
    //     },
    //     {
    //       title: "Texas 10 Worst Years",
    //       imgSrc: "Top10TexasWorstYears.png",
    //       code: "texas10worstyears.png"
    //     },
    //     {
    //       title: "Oklahoma 10 Worst Years",
    //       imgSrc: "OklahomaTop10.png",
    //       code: "oklahomatop10.png"
    //     },
    //     {
    //       title: "Kansas 10 Worst Years",
    //       imgSrc: "KansasTop10Years.png",
    //       code: "kansastop10.png"
    //     },
    //     {
    //       title: "Mississipi 10 Worst Years",
    //       imgSrc: "MississipiTop10.png",
    //       code: "mitop10.png"
    //     },
    //     {
    //       title: "Alabama 10 Worst Years",
    //       imgSrc: "AlabamaTop10Years.png",
    //       code: "alabamato10.png"
    //     },
    //     {
    //       title:
    //         "Alabama - GDP Change Vs. Average During Years with Worst Tornado Activity",
    //       imgSrc: "AlabamaGDPChange.png",
    //       code: "algdp.png"
    //     },
    //     {
    //       title:
    //         "Mississipi - GDP Change Vs. Average During Years with Worst Tornado Activity",
    //       imgSrc: "MississipiGDPChange.png",
    //       code: "migdp.png"
    //     },
    //     {
    //       title:
    //         "Kansas - GDP Change Vs. Average During Years with Worst Tornado Activity",
    //       imgSrc: "KansasGDPChange.png",
    //       code: "ksgdp.png"
    //     },
    //     {
    //       title:
    //         "Oklahoma - GDP Change Vs. Average During Years with Worst Tornado Activity",
    //       imgSrc: "OklahomaGDPChange.png",
    //       code: "oklgdp.png"
    //     },
    //     {
    //       title:
    //         "Texas - GDP Change Vs. Average During Years with Worst Tornado Activity",
    //       imgSrc: "TexasGDPChange.png",
    //       code: "texasgdp.png"
    //     }
    //   ]
    };
  }
};
</script>

<style>
.qryHeader {
  padding: 50px;
}
</style>

