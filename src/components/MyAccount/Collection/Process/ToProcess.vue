<template>
  <div class="ui-row form-collection">
    <div class="ui-column-12">
      <table class="ui-tables">
        <thead>
            <tr>
                <th class="ui-color-secondary">No. Factura</th>
                <th class="ui-color-secondary">Emisión</th>
                <th class="ui-color-secondary">Items</th>
                <th class="ui-color-secondary total_amount">Deuda</th>
                <th class="table-dropdown">&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(invoice, keyin) in invoices" :key="'CN-' + invoice.id">
                <td>{{ invoice.id }}</td>
                <td>{{ invoice.created_at }}</td>
                <td>
                  <div v-for="item in invoice.items" class="">
                    <p v-if="item.invoice_type == 'FalseItineraryModel'">{{item.invoiceable.tkt}}</p>
                  </div>
                </td>
                <td class="total_amount">
                  <vue-numeric
                    v-model="invoice.credit_note.total_amount"
                    :decimal-separator="invoice.currency_data.decimal_separator"
                    :currency="invoice.currency_data.code_visible"
                    :separator="invoice.currency_data.separator"
                    :read-only="true"
                    :precision="2"
                  ></vue-numeric>
                 </td>
                <td class="table-dropdown">
                  <div class="uchip-drop-container">
                    <div class="uchip-drop-title" @click="setMenu(keyin)">
                      <i class="icon-ellipsis-horizontal"></i>
                    </div>
                    <ul v-if="menu_iselected == keyin"  class="uchip-drop-menu active">
                      <li>
                        <router-link :to="{ name: 'invoice_detail', params: { invoice: invoice, id:invoice.id }}">
                            Ver detalles
                        </router-link>
                      </li>
                      <li>
                        <router-link :to="{name:'debtpayment', params: {invoice: invoice}}" >
                            Declarar pago
                        </router-link>
                      </li>
                    </ul>
                  </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="./ToProcess.js"></script>
