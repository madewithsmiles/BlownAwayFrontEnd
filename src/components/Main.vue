<template>
    <main>
        <b-container>
            <b-row class="text-center">
                <b-col></b-col>
                <b-col cols="12"><project-info /></b-col>
                <b-col></b-col>
            </b-row>
            <QuerySection header="Hi" code="SELECT * FROM *" graph="Beautiful graphs" />
        </b-container>
    </main>
</template>

<script>
import ProjectInfo from './ProjectInfo.vue'
import BContainer from 'bootstrap-vue/es/components/layout/container'
import BRow from 'bootstrap-vue/es/components/layout/row'
import BCol from 'bootstrap-vue/es/components/layout/col'
import QuerySection from './QuerySection'

export default {
    name: 'Main',
    components: {
        ProjectInfo,
        BContainer,
        BRow,
        BCol,
        QuerySection
    }
}
</script>

<style>

</style>

