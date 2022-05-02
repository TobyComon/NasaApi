<template>
  <input type="date" name="date" id="date" @submit.prevent="getImgByDate(value)" placeholder="MMDDYYYY">
  <button class="btn btn-success" type="submit" name="date">Submit</button>
    <div class="container">
      <img class="img-fluid shadow card" :src="image.img" alt="">
    </div>

</template>

<script>
import { computed } from '@vue/reactivity'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import { onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger.js'
import {imagesService} from '../services/ImagesService.js'
export default {
  name: 'Home',
  setup() {
    onMounted(async()=>{
        try {
          await imagesService.getImg()
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }
        try {
          await imagesService.getImgByDate(value)
        } catch (error) {
          
        }
    })
    return {
      image: computed(()=>AppState.image),
      value: ''
      }
    }
  }

</script>

<style scoped lang="scss">

</style>
