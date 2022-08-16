<template>
  <!-- {{apod}} -->
  <section class="row main-row" :style="{backgroundImage: `url(${apod?.img})`}" >
    <div class="col-12 text-end">
      <button class="my-2 px-4 btn btn-secondary" data-bs-toggle="modal" data-bs-target="#date-modal" @click="setDate()">Date</button>
    </div>
    <ApodViewport :apod="apod"/>
    <Modal id="date-modal">
    <div class="">
      <form @submit.prevent="searchDate">
      <input type="date" required v-model="query">
      <button type="submit">Submit</button>
      </form>
      
    </div>
  </Modal>
  </section>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { apodService } from '../services/ApodService.js';
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
  name: 'Home',
  setup(){
    async function getApod(){
      try {
        await apodService.getApod()
      } catch (error) {
        logger.error('[Getting Apod]', error)
        Pop.error(error)
      }
    }

    
    

    onMounted(() => {
      getApod()
    })
    return {
      
    async getApodByDate(){
      try {
        await apodService.getApodByDate(query.value)
        query.value = ''
      } catch (error) {
        logger.error('[Getting Apod By Date]', error)
        Pop.error(error)
      }
    },

      appState: computed(() => AppState),
      apod: computed(() => AppState.apod),
      getApod
    }
  }
}
</script>

<style lang="scss">
.main-row{
  min-height: 100vh;
}
</style>
