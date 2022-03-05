<template>
  <div class="py-3">
    <b-container class="mb-5">
      <b-row class="mb-5">
        <b-col cols="12" lg="9">
          <h2 class="text-center">Checkout</h2>
        </b-col>
        <b-col cols="12" lg="3">
        </b-col>
      </b-row>
      <b-row>
        <!--Formulario-->
        <b-col cols="12" lg="9">
          <b-form @submit.prevent="onSubmit">

            <div>
              <h4>Datos del Comprador</h4>
              <hr>
              <b-form-group id="input-group-1" label="Nombre" label-for="input-1">
                <b-form-input id="input-1" v-model="form.name" type="text" placeholder="" minlength="2" required>
                </b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Email" label-for="input-2">
                <b-form-input id="input-2" v-model="form.email" type="email" placeholder="" required>
                </b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Repetir Email" label-for="input-3">
                <b-form-input id="input-3" v-model="form.email2" type="email" placeholder="" required>
                </b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4" label="Teléfono" label-for="input-4">
                <b-form-input id="input-4" v-model="form.phone" type="number" placeholder="" minlength="9" required>
                </b-form-input>
              </b-form-group>
            </div>

            <div class="mt-4">
              <h4>Datos del Despacho</h4>
              <hr>

              <b-form-group id="input-group-5" label="Dirección" label-for="input-5">
                <b-form-input id="input-5" v-model="form.direction" type="text" placeholder="" minlength="4" required>
                </b-form-input>
              </b-form-group>

              <b-form-group id="input-group-6" label="Comuna" label-for="input-6">
                <b-form-input id="input-6" v-model="form.commune" type="text" placeholder="" minlength="4" required>
                </b-form-input>
              </b-form-group>
            </div>

            <div class="mt-4">
              <h4>Forma de Pago</h4>
              <hr>
              <b-card>
                <b-form-group label="" v-slot="{ ariaDescribedby }">
                  <b-form-radio v-model="form.payment" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="transferencia">
                    Transferencia Bancaria</b-form-radio>
                  <b-form-radio v-model="form.payment" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="servipag">
                    Servipag</b-form-radio>
                  <b-form-radio v-model="form.payment" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="webpay">
                    Web Pay</b-form-radio>
                  <b-form-radio v-model="form.payment" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="contraentrega">
                    Contra Entrega</b-form-radio>
                </b-form-group>
              </b-card>
            </div>
            <div class="d-flex justify-content-center">
              <b-button type="submit" variant="primary" class="mt-4 px-5">Continuar</b-button>
            </div>
          </b-form>

        </b-col>
        <b-col cols="12" lg="3" class="mt-5 mt-lg-0">
          <Cart title='Productos' />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Cart from '@/components/Cart.vue'
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'CheckOut',
    components: {
      Cart
    },
    data() {
      return {
        form: {
          name: null,
          email: null,
          email2: null,
          phone: null,
          direction: null,
          commune: null,
          payment: 1
        },
      }
    },
    computed: {
      ...mapGetters(['getOrderprocessreq', 'getProductos']),
      items() {
        return this.getOrderprocessreq.items
      },
      totales() {
        return this.getOrderprocessreq.totales
      },
      cliente() {
        return this.getOrderprocessreq.cliente
      },
      despacho() {
        return this.getOrderprocessreq.despacho
      },
      formapago() {
        return this.getOrderprocessreq.formapago
      },
      nameProduct() {
        let name, id
        let obj={}

        for (let j = 0; j < this.items.length; j++) {
          id = this.items[j].id
          console.log(this.items[j].id)
          for (let i = 0; i < this.getProductos.length; i++)
            if (this.getProductos[i].id == id) {
              name = this.getProductos[i].nombre
              break
            }
          obj[j]=name
        }
        console.log(obj)
        return obj
      }
    },
    created() {
      this.form.name = this.cliente.nombre
      this.form.email = this.cliente.email
      this.form.email2 = this.cliente.email
      this.form.phone = this.cliente.fono
      this.form.direction = this.despacho.direccion
      this.form.commune = this.despacho.comuna
      this.form.payment = this.formapago
    },
    methods: {
      onSubmit() {

        if (this.form.email != this.form.email2) {
          this.$swal.fire('Los correos deben ser iguales')
          return
        }

        this.$swal.fire({
          title: '¿Esta seguro de continuar?',
          showCancelButton: true,
          confirmButtonText: 'Si',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$store.commit('mutaAddtoCheckout', this.form)
            this.$router.push({
              name: 'confirmacion'
            })
          }
        })
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>