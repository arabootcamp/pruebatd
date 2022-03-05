import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home: {
      planes: [{
          titulo: "Paga lo que hablas",
          texto: "En BigMobile, sólo pagas lo que hablas. Nada de perder minutos ni cobros de más"
        },
        {
          titulo: "Cambiate cuando quiera",
          texto: "En BigMobile, no te amarramos. Puedes cambiarte de plan cuando quieras"
        },
        {
          titulo: "Minutos adicionales",
          texto: "Si quedaste corto de minutos este mes, puedes agregar minutos adicionales al mismo precio que tu plan"
        }
      ],
      opiniones: [{
          nombre: "José Pedreros",
          texto: "Son bacanes! Esta compañía te apaña caleta."
        },
        {
          nombre: "Miguel Cáceres",
          texto: "Acá sí te contestan el teléfono cuando los llamas"
        },
        {
          nombre: "Soledad Gómez",
          texto: "Lo mejor es la señal"
        }
      ]
    },
    equipos: {
      productos: [{
          id: "2334",
          nombre: "Motorola G10",
          caracteristicas: [
            "Camara 10 MPx",
            "4 GB RAM",
            "32 GB ROM",
            "3G/4G",
            "Chip Dual"
          ],
          precio_normal: 199000,
          precio_promo: 99000,
          imagen: "prod_2334.jpg"
        },
        {
          id: "2335",
          nombre: "Motorola G20",
          caracteristicas: [
            "Camara 10 MPx",
            "4 GB RAM",
            "32 GB ROM",
            "3G/4G",
            "Chip Dual"
          ],
          precio_normal: 149000,
          precio_promo: 79000,
          imagen: "prod_2335.jpg"
        },
        {
          id: "2336",
          nombre: "Motorola G30",
          caracteristicas: [
            "Camara 10 MPx",
            "4 GB RAM",
            "32 GB ROM",
            "3G/4G",
            "Chip Dual"
          ],
          precio_normal: 169000,
          precio_promo: 89000,
          imagen: "prod_2336.jpg"
        },
        {
          id: "2337",
          nombre: "Samsung A10",
          caracteristicas: [
            "Camara 10 MPx",
            "4 GB RAM",
            "32 GB ROM",
            "3G/4G",
            "Chip Dual"
          ],
          precio_normal: 129000,
          precio_promo: 59000,
          imagen: "prod_2337.jpg"
        },
        {
          id: "2338",
          nombre: "Samsung A20",
          caracteristicas: [
            "Camara 10 MPx",
            "4 GB RAM",
            "32 GB ROM",
            "3G/4G",
            "Chip Dual"
          ],
          precio_normal: 119000,
          precio_promo: 59000,
          imagen: "prod_2338.jpg"
        },
        {
          id: "2339",
          nombre: "Samsung A30",
          caracteristicas: [
            "Camara 10 MPx",
            "4 GB RAM",
            "32 GB ROM",
            "3G/4G",
            "Chip Dual"
          ],
          precio_normal: 189000,
          precio_promo: 89000,
          imagen: "prod_2339.jpg"
        },
        {
          id: "2340",
          nombre: "Huawei Y6",
          caracteristicas: [
            "Camara 10 MPx",
            "4 GB RAM",
            "32 GB ROM",
            "3G/4G",
            "Chip Dual"
          ],
          precio_normal: 139000,
          precio_promo: 79000,
          imagen: "prod_2340.jpg"
        },
        {
          id: "2341",
          nombre: "Huawei Y7",
          caracteristicas: [
            "Camara 10 MPx",
            "4 GB RAM",
            "32 GB ROM",
            "3G/4G",
            "Chip Dual"
          ],
          precio_normal: 149000,
          precio_promo: 69000,
          imagen: "prod_2341.jpg"
        }
      ],
      pagedResult: {
        page: 1,
        size: 10,
        total: 12
      }
    },
    orderprocessreq: {
      items: [{
          id: 2334,
          quantity: 1,
          price: 99000
        },
        {
          id: 2341,
          quantity: 1,
          price: 89000
        }
      ],
      totales: {
        subtotal: 88000,
        descuentos: 8000,
        total: 80000
      },
      cliente: {
        nombre: "Juan Perez",
        email: "juan@yahoo.com",
        fono: "993244523"
      },
      despacho: {
        direccion: "Las Camelias 1234",
        comuna: "Santiago Centro"
      },
      formapago: "webpay"
    },
    orderprocessresp: {
      orderNumber: 4452239,
      status: "CONFIRMADO"
    },
    cart: [],
    checkout: null,
  },
  getters: {
    getHome: state => state.home,
    getEquipos: state => state.equipos,
    getProductos: state => state.equipos.productos,
    getOrderprocessreq: state => state.orderprocessreq,
    getOrderprocessresp: state => state.orderprocessresp,
    getCart: state => state.cart,
  },
  mutations: {
    mutaAddToCart: (state, payload) => {
      state.cart.push(payload)
    },
    mutaAddtoCheckout: (state, payload) => {
      console.log(payload)
      state.checkout = payload
    }
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin],
})