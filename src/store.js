import {modCollection} from '@/components/MyAccount/Collection/store'
import {modSatellite} from '@/components/MyAccount/SatelliteRegister/store'
import{modUsers} from '@/components/MyAccount/Users/store'
import{modLogin} from '@//components/MyAccount/Login/store'
import{modFreelance} from '@//components/MyAccount/Freelance/store'
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    collection: modCollection,
    satellite: modSatellite,
    users: modUsers,
    Login: modLogin,
    freelance: modFreelance,
  }
});
