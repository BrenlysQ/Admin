import UltraApi from '../../UltraApi';
import moment from 'moment';
const masive_route = 'UltraMailer/FullMailCampaign';

export default {
    components: {

    },
    name: '',
    data() {
        return {
           files: 1,
           mail: {
            from: '',
            subject: '',
            nameCampaign:'',
            idCampaign:'',
            header:'',
            titleheader:'',
            content: '',
            //type: '',
            to:'',
            date:'',
            sentby:'',
            dateend:'',
            status:'',
           }
        }
    },
    created() {
        console.log('Mail: ', this.mail);
    },

    methods: {
        addFile: function(type = ''){
          if(type == 'sum'){
            this.files += 1;
          }else if(this.files > 1){
            this.files -= 1;
          }
        },
        files_to_upload: function(id) {
          console.log('Files: ', this.id);
        },
        sendStuff: function () {
          var form = $('#massive-mail-form');
          let self = this;
          form.validate({
            rules: {
              from:{
                required: true
              },
              subject: {
                required: true
              },
              content:{
                required: true
              },
              type: {
                required: true
              },
              nameCampaign:{

                required:true
              },
              idCampaign:{

                required:true
              },
              header:{

                required:true
              },
              titleheader:{

                required: true
              },
              to:{

                required: true
              },
              date:{

                required: true
              },
              sentby:{

                required: true
              },
              dateend:{

                required: true
              },
              status:{

                required:true
              }
            },
            messages:{
                from: '<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                subject: '<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                content: '<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                type: '<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                nameCampaign:'<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                idCampaign:'<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                header:'<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                titleheader:'<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                to:'<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                date:'<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                sentby:'<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                dateend:'<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                status:'<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
                
            },
          });
          
          if (form.valid() ) {
            UltraApi.call(this, masive_route, function (self, response) {
                    console.log(response.body) ;

                });
          }       
        }
    },
    watch: {

    }
}
 // UltraApi.call(this, credits_route, query, function (self, response) {
 //                self.credits = response.body;
 //                self.infoLoaded = true;
 //            });