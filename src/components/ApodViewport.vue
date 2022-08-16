<template>
  <section class="row text-light">
    <div class="col-12">
        <h5>{{ apod.date }}</h5>
        <h1>{{ apod.title }}</h1>
        <p><b>{{ apod.description }}</b></p>
        <p><i><small>copywrite: {{ apod.copyright }}</small></i></p>

    </div>
  </section>
</template>


<script>
import { Apod } from '../models/Apod.js';
export default {
    props: {
        apod: { type: Apod, required: true}
    },
  setup() {
    return {
        
    }
  }
}
</script>


<style lang="scss" scoped>


</style>