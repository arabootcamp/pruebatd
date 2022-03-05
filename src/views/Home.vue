<template>
  <div>
    <b-container fluid class="mb-5 mx-0 p-0">
      <!--Vitrina-->
      <div class="m-3">
        <b-jumbotron class="my-0">
          <p class="text-center text-secondary my-0">Vitrina</p>
        </b-jumbotron>
      </div>
      <!--Planes Flexibles-->
      <div class="py-5">
        <h4 class="text-center">Planes Flexibles</h4>
        <b-container fluid class="m-0 p-0">
          <b-row class="mt-5">
            <b-col cols="12" md="6" lg="4" v-for="(el,idx) in planes" :key="'home'+idx" class="text-center">
              <b-card :title="el.titulo" img-src="https://picsum.photos/600/300/?image=1" img-alt="Image" img-top
                tag="article" style="max-width: 20rem;" class="mb-2 border border-0 mx-auto">
                <b-card-text>
                  {{el.texto}}
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!--que dicen de nosotros-->
      <div class="py-5 bg-custom">
        <h4 class="text-center">Que dicen de nosotros</h4>
        <b-row class="mt-5">
          <b-col cols="12" md="4" v-for="(el,idx) in opiniones" :key="'home'+idx" class="text-center">
            <b-card :title="el.titulo" img-src="https://picsum.photos/600/300/?image=1" img-alt="Image" img-top
              tag="article" style="max-width: 20rem;" class="mb-2 border border-0 mx-auto">
              <b-card-text>
                {{el.texto}}
                <div class="mt-2 d-flex justify-content-end">
                  <i>{{el.nombre}}</i>
                </div>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'Home',
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['getHome']),
      planes() {
        return this.getHome.planes
      },
      opiniones() {
        return this.getHome.opiniones
      }
    },
    methods: {}
  }
</script>

<style lang="sass" scoped>
  .bg-custom 
    background-color:#ddd
</style>