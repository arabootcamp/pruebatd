<template>
  <div class="py-3">
    <b-container class="mb-5">
      <h2 class="text-center">Confirmación</h2>

      <div v-if="getOrderprocessresp.status=='CONFIRMADO'">
        <b-card class="mt-5">
          La Orden N° {{getOrderprocessresp.orderNumber}} ha sido confirmada y ya la estamos preparando!
        </b-card>
        <div class="mt-5 text-center">
          <b-button variant="primary" :to="{name:'home'}" class="px-5">Ir al Home</b-button>
        </div>
      </div>

      <div v-else class="mt-5">
        <b-alert variant="warning" show dismissible>
          El status es:  {{getOrderprocessresp.status}}
        </b-alert>
      </div>

    </b-container>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  // @ is an alias to /src

  export default {
    name: 'Confirmacion',
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['getOrderprocessresp'])
    },
    methods: {}
  }
</script>

<style lang="sass" scoped>

</style>