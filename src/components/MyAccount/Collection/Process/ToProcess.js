import VueNumeric from 'vue-numeric'
export default {
    name: '',
    components:{
      VueNumeric
    },
    props:{
      invoices:{},
    },
    data() {
      return {
        menu_iselected: -1
      }
    },
    created: function () {
      var _self = this;
      console.log('ssss',this.invoices);
      $(document).mouseup(function(e){
        var container = $('.uchip-drop-menu');
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0 && container.hasClass('active')){
            _self.setMenu(-1);
        }
      });
    },
    methods:{
      setMenu: function(selected){
        this.menu_iselected = selected;
      }
    }
}
