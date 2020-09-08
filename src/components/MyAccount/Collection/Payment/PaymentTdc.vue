<template>
    <div class="ui-column-7">
      <div class="dashboard-payment">
          <h2 class="dashboard-payment__title">Pago con Credito</h2>
          <form id="ccform">
              <div class="ui-column-12">
                  <div class="ui-input-group">
                      <label class="ui-label ui-color-secondary">Correo Electronico</label>
                      <input placeholder="Correo Electronico" id="email_address" type="text" name="email_address" class="ui-input" required maxlength="100"/>
                  </div>
                  <div class="ui-input-group">
                      <label class="ui-label ui-color-secondary">Monto de la transaccion</label>
                      <input v-model="charge" type="text" name="amount" data-msg-required="Ingrese el monto de su pago" id="amount" class="ui-input" data-rule-required="true"/>
                  </div>
                  <div class="ui-input-group">
                      <label class="ui-label ui-color-secondary">Descripcion:</label>
                      <input placeholder="Descripcion de Pago" id="description" type="text" name="description" required class="ui-input"/>
                  </div>
                  <div class="ui-input-group">
                      <label class="ui-label ui-color-secondary">Tarjeta de Credito:</label>
                      <div id="card-container" class="ui-input"></div>
                      <div id="card-errors" role="alert"></div>
                  </div>
              </div>
              <div class="ui-column-12">
                  <div class="ui-margin-large-top ui-flex ui-justify-content-between">
                      <router-link to="/reservations" class="ui-button ui-button--primary">
                          Volver
                      </router-link>
                      <button @click="sendForm()" class="ui-button ui-button--secondary" id="payment-btn"><i class="fa fa-credit-card" aria-hidden="true"></i>Pagar</button>
                  </div>
              </div>
          </form>
      </div>
    </div>
</template>
<script>
    export default {
        props:{
            invoice : {
                default : false
            }
        },
        data: function () {
          return {
            stripe : {},
            stripeCard : {},
            charge: 0,
            leftToPay: 0
          }
        },

        created: function () {
            this.leftToPay = this.invoice.total_amount - this.invoice.total_paid;
            // console.log($('#payment-btn i'));
            // console.log(this.invoice);
            this.charge = this.invoice.total_amount - this.invoice.total_paid;
            setTimeout(function(){
                //console.log('ejecutaos');
                var key = 'pk_test_0wmJrUh25A62kp30pUaHV4IR';
                // Create a Stripe client
                var stripe = Stripe(key);
                this.stripe = stripe;
                // Create an instance of Elements
                var elements = stripe.elements();
                // Custom styling can be passed to options when creating an Element.
                // (Note that this demo uses a wider set of styles than the guide below.)
                var style = {
                    base: {
                        color: '#32325d',
                        lineHeight: '18px',
                        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                        fontSmoothing: 'antialiased',
                        fontSize: '16px',
                        '::placeholder': {
                            color: '#aab7c4'
                        }
                    },
                    invalid: {
                        color: '#fa755a',
                        iconColor: '#fa755a'
                    }
                };

                // Create an instance of the card Element
                var stripeCard = elements.create('card', {style: style, hidePostalCode:true});
                this.stripeCard = stripeCard;

                // Add an instance of the card Element into the `card-element` <div>
                stripeCard.mount('#card-container');

              },1000);
        },
        mounted: function () {
            if(this.leftToPay == 0){
                $('#payment-btn').prop('disabled', true);
                // console.log('Sí pasa');
            }
        },
        methods: {
          sendForm : function(){
            // console.log(this.stripe);
            // console.log(this.stripeCard);
            this.leftToPay = this.invoice.total_amount - this.invoice.total_paid;
            event.preventDefault();
            let description = $('#description').val();
            let totpay = this.charge;
            let email = $('#email_address').val();
            let totalamount = this.invoice.total_amount;
            var vueins = this;
            if (parseFloat(totpay) <= parseFloat(this.leftToPay.toFixed(2)) && (this.leftToPay > 0)){
                $('#payment-btn').prop('disabled', true);
                $('#payment-btn span').text('Pagando')
                $('#payment-btn i').removeClass('fa-credit-card').addClass('fa-spinner fa-pulse fa-fw');
                stripe.createToken(stripeCard).then(function(result) {
                    if (result.error) {
                        // Inform the user if there was an error
                        var errorElement = document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                    } else {
                        let token = result.token.id;

                        var data = '{' +
                            '"invid": "' + vueins.invoice.id + '",' +
                            '"description": "' +  description  + '",' +
                            //'"tel": "' + tel + '",' +
                            '"totpay": "' + totpay + '",' +
                            '"totalamount": "' + totalamount + '",' +
                            '"email": "' + email + '",' +
                            '"token": "' + token + '",' +
                            '"pgateway": "' + 4 + '"' +
                        '}';

                    }
                });
            }else{
                swal2(
                    'Ha habido un problema',
                    'El monto ingresado es mayor al monto a pagar .',
                    'error'
                );
            }

          }
        }
    }


</script>
