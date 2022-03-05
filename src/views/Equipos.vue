<template>
  <div class="py-3">
    <b-container fluid class="mb-5">
      <b-row>
        <b-col cols="12" lg="3" class="mb-5 mb-lg-0">
          <Cart />
        </b-col>
        <b-col cols="12" lg="9">
          <h4>Equipos & Accesorios</h4>
          <b-row class="mt-5">
            <b-col cols="12" md="6" xl="4" xxl="3" v-for="(el,idx) in productos" :key="'home'+idx" class="text-center">
              <b-card img-src="https://picsum.photos/600/300/?image=1" img-alt="Image" img-top tag="article"
                style="max-width: 20rem;" class="mb-4 mx-auto">
                <b-card-text class="text-left">
                  <h5>{{el.nombre}}</h5>
                  <ul class="">
                    <li v-for="(el2,idx2) in el.caracteristicas" :key="el.nombre+idx2">
                      {{el2}}
                    </li>
                  </ul>
                </b-card-text>
                <b-row>
                  <b-col cols="6">
                    <p class="my-0">Antes</p>
                    <strong class="text-secondary fs-1-25rem">{{el.precio_normal | filterNumFormat}}</strong>
                  </b-col>
                  <b-col cols="6">
                    <p class="my-0">Ahora</p>
                    <strong class="text-primary fs-1-25rem">{{el.precio_promo | filterNumFormat}}</strong>
                  </b-col>
                </b-row>
                <b-button href="#" variant="primary w-100" class="mt-4" @click="addProduct(el)">Agregar</b-button>
              </b-card>
            </b-col>
          </b-row>
          <!--pagination -->
          <div class="mt-5">
            <b-pagination v-model="pagination.currentPage" :total-rows="pagination.rows" :per-page="pagination.perPage"
              align="center">
            </b-pagination>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  import {
    mapGetters
  } from 'vuex'
  import Cart from '@/components/Cart.vue'

  export default {
    name: 'Equipos',
    components: {
      Cart
    },
    data() {
      return {
        pagination: {
          currentPage: 1,
          perPage: 12,
          rows: 12
        }
      }
    },
    computed: {
      ...mapGetters(['getEquipos']),
      productos() {
        return this.getEquipos.productos
      },
      page() {
        return this.getEquipos.pagedResult
      }
    },
    methods: {
      addProduct(product) {
        this.$swal.fire({
          title: '¿Esta seguro de agregar el producto?',
          showCancelButton: true,
          confirmButtonText: 'Si',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$store.commit('mutaAddToCart', product)
            this.$swal.fire('Producto agregado')
          }
        })
      }
    }
  }
</script>

<style lang="sass">
  .fs-1-5rem 
    font-size: 1.5rem
  .fs-1-25rem 
    font-size: 1.25rem
</style>