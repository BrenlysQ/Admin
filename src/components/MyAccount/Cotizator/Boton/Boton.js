import { mixin as clickaway } from 'vue-clickaway';
import IconMap from '@/components/UI/UIIcons/IconMap.vue'
import IconArrow from '@/components/UI/UIIcons/IconArrow.vue'
import IconArrowToggle from '@/components/UI/UIIcons/IconArrowToggle.vue'
import IconPassengers from '@/components/UI/UIIcons/IconPassengers.vue'
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'
import Autocomplete from './Autocomplete.vue'
// import { en, es } from 'vuejs-datepicker/dist/locale'
export default {
    components: {
        IconMap,
        IconArrow,
        IconArrowToggle,
        IconPassengers,
        Datepicker,
        Autocomplete
    },
    mixins: [clickaway],
    data() {
        return {
            state : {
                date: new Date(),
            },
            disabledDates: {
                to: new Date(),
            },
            isOptions: false,
            isInput: false,
            isClass: false,
            classFlight: 'Economica',
            classList: [{
                    class: 'Ejecutiva'
                },
                {
                    class: 'Primera'
                },
                {
                    class: 'Economica'
                }
            ],
            adults: 1,
            childs: 0,
            guests: 0,
        }
    },
    methods: {
        customFormatter(date) {
            return moment(date).format('D-MM-YYYY');
        },
        openOptions: function() {
            this.isOptions = !this.isOptions
        },
        closeOptions: function() {
            this.isOptions = false
        },
        openClass: function() {
            this.isClass = !this.isClass
        },
        closeClass: function() {
            this.isClass = false
        },
        selectClass: function(klass) {
            this.classFlight = klass
        },
        addAdults: function() {
            this.adults += 1;
        },
        deleteAdults: function() {
            if (this.adults > 0) {
                this.adults -= 1;
            }
        },
        addChilds: function() {
            this.childs += 1;
        },
        deleteChilds: function() {
            if (this.childs > 0) {
                this.childs -= 1;
            }
        },
        addGuests: function() {
            this.guests += 1;
        },
        deleteGuests: function() {
            if (this.guests > 0) {
                this.guests -= 1;
            }
        },
    }
}
