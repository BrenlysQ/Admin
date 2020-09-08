<template>
    <div class="payments-list-container">
      <div class="" v-if="payments.length > 0">
        <table class="ui-tables" >
          <thead>
              <tr class="ui-bg-secondary">
                <th class="ui-color-credit-white">Fecha</th>
                <th class="ui-color-credit-white">Tipo de pago</th>
                <th class="ui-color-credit-white">Status</th>
                <th class="ui-color-credit-white total_amount">Pagado</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(payment, kpay) in payments" :key="'tr-' + kpay" :id="'payment-' + payment.id">
                <td>{{payment.created_at | date_payment}}</td>
                <td>{{payment.pgateway.name}}</td>
                <td v-html="pay_status(payment.st)"></td>
                <td class="total_amount">
                  <vue-numeric :currency="payment.currency.code_visible" :decimal-separator="payment.currency.decimal_separator" :separator="payment.currency.separator" :read-only="true" :precision="2" :value="payment.amount"></vue-numeric>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <div v-else-if="payments_loaded && payments.length < 1">
        <h4 class="review-title-error">Aún no se han realizado pagos</h4>
      </div>
      <div v-else-if="payments_loaded">
        <vue-loading type="bubbles" color="#003366" :size="{ width: '70px', height: '70px' }"></vue-loading>
      </div>
    </div>
</template>
<script src="./PaymentsList.js"></script>
