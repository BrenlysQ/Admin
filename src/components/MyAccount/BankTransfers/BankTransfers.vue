<template>
    <div class="ui-margin-large-top" style="padding:2rem;">
      <div class="ui-margin-large-bottom">
        <div class="ui-row form-collection">
          <div class="ui-column-12">
            <div class="ui-input-group">
                <label class="ui-label ui-margin-small-bottom ui-color-secondary">Cliente</label>
                <vue-tags-input
                  placeholder="Cliente"
                  v-model="tag_customer"
                  :tags="parameters.customers"
                  :add-only-from-autocomplete="true"
                  @tags-changed="updateCustomersTags"
                  :autocomplete-items="parameters.customers_autocomplete">
                </vue-tags-input>
            </div>
          </div>
        </div>
        <div class="ui-row">
          <button class="ui-button ui-button--secondary">Buscar</button>
        </div>
        <div class="detailed_debt">
            <table class="ui-tables">
              <thead>
                  <tr>
                      <th class="ui-color-secondary"># Factura</th>
                      <th class="ui-color-secondary">Banco</th>
                      <th class="ui-color-secondary">Cliente</th>
                      <th class="ui-color-secondary">Fecha</th>
                      <th class="ui-color-secondary"># Referencia</th>
                      <th class="ui-color-secondary total_amount">Monto</th>
                      <th class="ui-color-secondary">Acciones</th>

                  </tr>
              </thead>
              <tbody>
                <tr v-for="(transfer, index) in transfers">
                    <td>{{ transfer.payment.invoice.id }}</td>
                    <td>
                      {{transfer.bank.name}}

                      <!-- <i class="fa fa-exchange" v-if="transfer.type == 1"></i>
                      <i class="fa fa-money" v-if="transfer.type == 2"></i> -->

                      </td>
                    <td>{{ getClientName(transfer.payment.invoice) }}</td>
                    <td>{{ formatOut(transfer.payment_date) }}</td>
                    <td>{{ transfer.confirmation }}</td>
                    <td class="total_amount">
                      <vue-numeric v-model="transfer.payment.amount" :separator="transfer.payment.currency.separator" :decimal-separator="transfer.payment.currency.decimal_separator" :currency="transfer.payment.currency.code_visible" :read-only="true" :precision="2"></vue-numeric>
                    </td>
                    <td v-if="transfer.payment.st == 1">
                      <ul>
                        <li>
                          <a href="javascript:void(0)" class="btn btn-primary" @click="confirmTransfer(transfer, index)">Confirmar</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" class="btn btn-danger" @click="bounceTransfer(transfer, index)">Rechazar</a>
                        </li>
                      </ul>

                    </td>
                    <td v-if="transfer.payment.st == 2"><span class="ui-color-secondary">Confirmado</span></td>
                    <td v-if="transfer.payment.st == 3"><span class="ui-color-secondary">Rechazada</span></td>
                  </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
</template>

<script src="./BankTransfers.js"></script>
