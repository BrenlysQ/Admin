import IconSquare from '@/components/UI/UIIcons/IconSquare.vue'
import UltraApi from '../../UltraApi'

import { mixin as clickaway } from 'vue-clickaway';

export default {

    name: 'navbar',

    mixins: [clickaway],

    components: {

        IconSquare
        
    },
    props: {

        isCollapse: Boolean,

        isSidebar: Boolean,

        itemCollapse: Function,

        sidebarShow: Function

    },

    data() {

        return {
            isBarProfile: false,

            isDropProfile: false,

            isMessage: false,

            itemsNav: [

                {
                    link: 'vuelo'
                },

                {
                    link: 'hoteles'
                },

                {
                    link: 'carros'
                },

                {
                    link: 'seguros'
                }

            ]

        }

    },

    methods: {

        barProfileShow: function () {

            this.isBarProfile = !this.isBarProfile
        },

        dropProfile: function () {

            this.isDropProfile = !this.isDropProfile
        },
        
        showMessage: function () {

            this.isMessage = !this.isMessage
        },

        closeEvent: function () {

            this.isDropProfile = false
        },
         logout: function () {

            UltraApi.logout();
        },

    }

}