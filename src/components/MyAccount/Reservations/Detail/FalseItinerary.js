import VueNumeric from 'vue-numeric'
export default {
    name: '',
    components:{
      VueNumeric
    },
    props:{
      item:{},
      currency:{},
      menuSelected:{},
      menuIndex:{}
    },
    data() {
      return {
        menu_iselected: -1,
        itin:{}
      }
    },
    created: function () {
      this.itin = this.item.invoiceable;


    },
    methods:{
      setMenu: function(index){
        this.$parent.menu_iselected = index;
      }
    }
}
