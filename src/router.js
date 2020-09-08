import Vue from 'vue'
// import moment from 'moment'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

import Cotizator from '@/components/MyAccount/Cotizator/Cotizator.vue'
import Profile from '@/components/MyAccount/Profile/Profile.vue'
import Asociates from '@/components/MyAccount/Asociates/Asociates.vue'
import AffReqCode from '@/components/MyAccount/Asociates/Request/AffReqCode.vue'
import Reservations from '@/components/MyAccount/Reservations/Reservations.vue'
import Sales from '@/components/MyAccount/Sales/Sales.vue'
import Login from '@/components/MyAccount/Login/Login.vue'
import Logout from '@/components/MyAccount/Logout/Logout.vue'
import Collection from '@/components/MyAccount/Collection/Collection.vue'
import CollectionProcess from '@/components/MyAccount/Collection/Process.vue'
import CollectionData from '@/components/MyAccount/Collection/LoadData/Load.vue'
import PaymentView from '@/components/MyAccount/Collection/Payment/PaymentView.vue'
import InvoiceDetailDebt from '@/components/MyAccount/Reservations/Detail/DetailDebt.vue'
import Credits from '@/components/MyAccount/Credits/Credits.vue'
import CreateCredit from '@/components/MyAccount/Credits/CreateCredit.vue'
import MassiveMail from '@/components/MyAccount/MassiveMail/MassiveMail.vue'
import SatelliteRegister from '@/components/MyAccount/SatelliteRegister/Register.vue'
import SatelliteList from '@/components/MyAccount/SatelliteRegister/SatelliteList.vue'
import SatelliteUpdate from '@/components/MyAccount/SatelliteRegister/UpdateSat.vue'
import Details from '@/components/MyAccount/SatelliteRegister/Details.vue'
import UpdateCredit from '@/components/MyAccount/Credits/UpdateCredit.vue'
import BankTransfers from '@/components/MyAccount/BankTransfers/BankTransfers.vue'
import Users from '@/components/MyAccount/Users/Users.vue'
import affiliateUser from '@/components/MyAccount/Users/affiliateUser.vue'
import DetailsUser from '@/components/MyAccount/Users/DetailsUser.vue'
import UpdateUser from '@/components/MyAccount/Users/UpdateUser.vue'
import freelance from '@/components/MyAccount/Freelance/freelance.vue'
import freelanceList from '@/components/MyAccount/Freelance/freelanceList.vue'
import updatefree from '@/components/MyAccount/Freelance/updatefree.vue'
import detailfree from '@/components/MyAccount/Freelance/detailfree.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
          path: '/invoice/detail/:id',
          component: InvoiceDetailDebt,
          props: true,
          name: 'invoice_detail'
      },
      {
          path: '/collection/payment/',
          component: PaymentView,
          props: true,
          name: 'debtpayment'
      },
      {
        path: 'collection/process',
        component: CollectionProcess,
      },
      {
        path: 'asociates/loadfile',
        component: Asociates,
      },
      {
        path: '/asociates/codes',
        component: AffReqCode,
      },
      {
        path: 'collection',
        component: Collection,
      },
      {
        path: 'collection/getdata',
        component: CollectionData,
      },
      {
        path: 'sales',
        component: Sales,
      },
      {
        path: 'credits',
        component: Credits,
      },
      {
        path: 'newcredit',
        component: CreateCredit,
      },
      {
          path: 'updatecredit',
          component: UpdateCredit,
          props: true,
          name: 'updatecredit'
        },
        /**
         * Rutas de Transferencias bancarias
         */
        {
          path: 'banktransfers',
          component: BankTransfers,
        },
          /**
         * Rutas de Massive
         */
        {
          path: 'sendmassives',
          component: MassiveMail,
       },


        /**
         * Rutas de Freelance
         */
        {
         path: 'freelance',
         component: freelance,
       },
       {
         path: 'updatefree',
          component: updatefree,
          props: true,
          name: 'updatefree'
        },
        {
         path: 'detailfree',
         component: detailfree,
         props: true,
         name: 'detailfree'
       },
        {
         path: 'freelanceList',
         component: freelanceList,
       },


         /**
         * Rutas de Satelite
         */
       {
         path: 'affiliate',
         component: SatelliteRegister,
       },
        {
          path: 'affiliate/update',
          component: SatelliteUpdate,
          props: true,
          name: 'UpdateSat'
        },
        {
         path: 'satelliteDetails',
         component: Details,
         props: true,
         name: 'Details'
       },
        {
         path: 'satelliteList',
         component: SatelliteList,
       },
         /**
         * Rutas de Usuario
         */
        {
         path: 'users',
         component: Users,
       },
        {
         path: 'affiliateUser',
         component: affiliateUser,
         props:true,
         name:'affiliateU',
       },
        {
         path: 'DetailsUser',
         component: DetailsUser,
         props:true,
         name:'DetailsUser',
       },
        {
         path: 'UpdateUser',
         component: UpdateUser,
         props:true,
         name:'UpdateUser',
       },
    ]
  },
    {
          path: '/login',
          component: Login,
    },
    {
          path: '/Logout',
          component: Logout,
    },
  ]
})