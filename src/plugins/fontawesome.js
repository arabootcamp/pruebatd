import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
//iconos que vayamos necesitando en formato camelCase
import { faHome,faCalendar,faCheckCircle,faAdd,faRemove,fa0,faAd,faPlusCircle, faMinusCircle, faDotCircle,faCircle} from '@fortawesome/free-solid-svg-icons'
/*******************************************************************/ 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome,faCalendar,faCheckCircle,faAdd,faRemove,fa0,faAd,faPlusCircle,faMinusCircle,faDotCircle,faCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)