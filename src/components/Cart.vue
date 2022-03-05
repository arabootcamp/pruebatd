<template>
  <div>
    <b-container fluid>
      <h4>{{title}}</h4>
      <hr>
      <!--Listar productos agregados-->
      <b-row v-for="(el,idx) in getCart" :key="'cart-'+idx" class="mb-3">
        <b-col cols="4">
          <b-img src="https://picsum.photos/600/300/?image=1" fluid alt="Responsive image"></b-img>
        </b-col>
        <b-col cols="8">
          <p class="my-0">{{el.nombre}}</p>
          <strong class="text-primary fs-1-25rem">${{el.precio_promo | filterNumFormat}}</strong>
        </b-col>
      </b-row>
      <hr>
      <div>
        <div class="mb-3 d-flex justify-content-between align-items-center">
          Subtotal Productos
          <strong class="text-secondary fs-1-25rem">
            ${{purchaseSummary.subtotal  | filterNumFormat}}
          </strong>
        </div>
        <div class="mb-3 d-flex justify-content-between align-items-center">
          Descuentos
          <strong class="text-secondary fs-1-25rem">${{purchaseSummary.discount  | filterNumFormat}}</strong>
        </div>
        <div class="mb-3 d-flex justify-content-between align-items-center">
          Total
          <strong class="text-primary fs-1-5rem">${{purchaseSummary.total | filterNumFormat}}</strong>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';

  export default {
    name: 'Cart',
    data() {
      return {}
    },
    props: {
      title: {
        type: String,
        default: "Bolsa de Compra BIG MOBILE"
      }
    },
    computed: {
      ...mapGetters(['getCart']),
      /*
      o	Si el total de productos es menor a $100.000, se debe aplicar un 5% de descuento a toda la compra.
      o	Si el total de productos es mayor o igual a $100.000, se debe aplicar un 7% de descuento a toda la compra.
      o	El resultado debe estar redondeado, sin decimales.
      */
      purchaseSummary() {
        let subtotal = 0
        let discount = 0
        for (let i = 0; i < this.getCart.length; i++) {
          subtotal += this.getCart[i].precio_normal
          discount += (this.getCart[i].precio_normal - this.getCart[i].precio_promo)
        }
        let total = subtotal - discount

        total = (total < 100000) ? Math.round(total * 0.95) : Math.round(total * 0.93)

        return {
          subtotal,
          discount,
          total
        }
      },
    },
    methods: {}
  }
</script>