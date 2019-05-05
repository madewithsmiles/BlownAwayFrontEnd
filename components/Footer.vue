<template>
    <v-footer absolute>
      <div class="myfooter">
        Made with ❤️ by Omicron Wow &copy; {{new Date().getFullYear() }}
      </div>
    </v-footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
.myfooter {
    background-color: white; 
    color: white; 
    padding: 10px; 
    bottom: 0; 
    align-content: center; 
    background-image: linear-gradient(to right, #20c997, #17a2b8);
}
</style>
