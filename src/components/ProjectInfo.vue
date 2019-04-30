<template>
  <b-card align="center"> <!--border-variant="info"-->
    <!-- header-bg-variant="primary"
    header-text-variant="white"-->
    <!-- <b-card-header style="background-color: #007bff !important; color: white">
      <h2>Project Info</h2>
    </b-card-header> -->
    <h3 class="marginBottomPoint2Rem marginTop8 sienna">Topic</h3>
    <p
      class="inline pointfiverem"
    >Database project with visualizations of U.S. tornado + states GDP data from 1950 to 2017</p>
    <hr />
    <b-card-text>
      <h3 class="marginBottomPoint2Rem marginTop8 sienna">Goal</h3>
      <p class="pointfiverem">
        Provide visual insight into tornado activity and possible GDP impact over the past century. Make use of
        <em>frequency</em>,
        <em>magnitude</em>
        data of tornadoes,
        and <em>GDP</em>
        per U.S. state
      </p>
      <hr />
      <h3 class="marginBottomPoint2Rem marginTop8 sienna">Datasets</h3>
      <ul class="pointfiverem" style="text-align: left;">
          <li>
            National Weather Service - Storm Prediciton Center Warning Coordination Meteorologist |
            <a
            class=".card-link"
            href="https://www.spc.noaa.gov/wcm/data/1950-2017_actual_tornadoes.csv"
            target="_blank"
            rel="noopener noreferrer"
            >1950-2017_actual_tornadoes.csv (6.6 mb)</a>
          </li>
          <li>
              State GDP Data | 
              <a
                class=".card-link"
                href="https://apps.bea.gov/regional/downloadzip.cfm"
                target="_blank"
                rel="noopener noreferrer"
                >GDP per State</a>
          </li>
      </ul>
    </b-card-text>
  </b-card>
</template>

<script>
import BCard from "bootstrap-vue/es/components/card/card";
// import BCardHeader from "bootstrap-vue/es/components/card/card-header";
// import BCardFooter from 'bootstrap-vue/es/components/card/card-footer'
// import BCardBody from 'bootstrap-vue/es/components/card/card-body'
// import BCardTitle from 'bootstrap-vue/es/components/card/card-title'
// import BCardSubTitle from 'bootstrap-vue/es/components/card/card-sub-title'
// import BCardImg from 'bootstrap-vue/es/components/card/card-img'
import BCardText from "bootstrap-vue/es/components/card/card-text";

export default {
  name: "ProjectInfo",
  components: {
    BCard,
    // BCardHeader,
    // BCardFooter,
    // BCardBody,
    // BCardTitle,
    // BCardSubTitle,
    // BCardImg,
    BCardText
  }
};
</script>

<style>
.inline {
  display: inline;
}

.pointfiverem {
  font-size: 1.5rem;
}

.marginTop8 {
  margin-top: 8px;
}

.marginBottomPoint2Rem {
  margin-bottom: 0.2rem;
}

.left {
  display: flex;
  align-self: flex-start;
}

.sienna {
    color: #dd192c;
}
</style>
