<template>
  <div id="app">
    <central-card>
      <router-view></router-view>
    </central-card>
  </div>
</template>

<script>
import CentralCard from './components/CentralCard.vue';

export default {
  components: { 
    CentralCard
  },
  name: 'App'
  
}
</script>

<style>
  
</style>
