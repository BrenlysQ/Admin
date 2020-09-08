<template>
    <div>
      <div class="ui-margin-large-top" style="padding:2rem;">
            <nav class="dashboard-credit__nav">
                <li>
                    <a v-if="invoice.currency == 4" href="javascript:void(0)" @click="selected_view = 'TDC'" class="ui-margin-right">Tarjeta de Crédito</a>
                    <a href="javascript:void(0)" @click="selected_view = 'TRANSFER'">Transferencia</a>
                </li>
            </nav>
            <div class="ui-row ui-justify-content-center" v-if="selected_view == 'TDC'">
                <payment-tdc
                    :invoice="invoice"
                    :source="source"
                ></payment-tdc>
            </div>
            <div class="ui-row" v-else-if="selected_view == 'TRANSFER'">
                <declare-payment
                    :invoice="invoice"
                    :source="source"
                ></declare-payment>
            </div>
            <div class="ui-row">
              <div class="ui-column-3">
                <button class="ui-button ui-button--secondary" @click="$router.go(-1)">Volver</button>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
    import UltraApi from '../../../UltraApi'
    import PaymentTdc from  './PaymentTdc.vue'
    import DeclarePayment from  './Declare.vue'
    import vueLoading from 'vue-loading-template'
    export default {
        components: {
            vueLoading,
            PaymentTdc,
            DeclarePayment
        },
        props: {
            invoice: {},
            source: false
        },
        data: function () {
          return {
            load2: false,
            selected_view: 'TRANSFER',
          }
        },
        created: function () {
            console.log(this.invoice);

            this.selected_view = (this.invoice.payment_gateway == 1 && this.invoice.currency == 4) ? 'TDC' : 'TRANSFER';

        },
        mounted: function () {

        },
        methods: {

        }
    }


</script>
