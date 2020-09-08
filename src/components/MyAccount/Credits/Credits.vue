<template>
  <div class="ui-margin-large-top" style="padding:2rem;">
      <div class="ui-margin-large-bottom">
        <div class="ui-row form-collection">
          <div class="ui-column-12">
            <div class="ui-input-group">
                <label class="ui-label ui-margin-small-bottom ui-color-secondary">Cliente</label>
                <vue-tags-input
                  v-model="tag_customer"
                  placeholder="Cliente"
                  :tags="parameters.customers"
                  :autocomplete-items="parameters.customers_autocomplete"
                  :add-only-from-autocomplete="true"
                  :max-tags="1"
                  @tags-changed="updateCustomersTags">
                </vue-tags-input>
            </div>
          </div>
        </div>
        <div class="ui-row">
          <button class="ui-button ui-button--secondary" @click="getCredits">Buscar</button>
          <router-link to="/newcredit">
              <button class="ui-button ui-button--secondary">Nuevo Crédito</button> 
          </router-link>
        </div>
        <div class="detailed_debt" v-if="infoLoaded">
            <table class="ui-tables">
              <thead>
                  <tr>
                      <th class="ui-color-secondary">Satelite</th>
                      <th class="ui-color-secondary">Freelance</th>
                      <th class="ui-color-secondary">Tipo</th>
                      <th class="ui-color-secondary">Creado</th>
                      <th class="ui-color-secondary">Fecha Corte</th>
                      <th class="ui-color-secondary total_amount">Total</th>
                      <th class="ui-color-secondary">Acciones</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="(credit, index) in credits" :key="'C-' + credit.id">
                    <td>{{ credit.satellite.owner.name }}</td>
                    <td>
                      <span v-if="credit.freelance != null">{{ credit.freelance.name }} {{ credit.freelance.lastname }}</span>
                      <span v-else> N/A </span>
                    </td>
                    <td><span v-if="credit.credit_type_id == '2'">Monto</span><span v-else-if="credit.credit_type_id == '1'">Fecha de corte</span></td>
                    <td>{{ formatOut(credit.created_at) }}</td>
                    <td>{{ formatOut(credit.due_date) }}</td>
                    <td class="total_amount">
                      <vue-numeric v-model="credit.total_amount" :separator="credit.currency.separator" :decimal-separator="credit.currency.decimal_separator" :currency="credit.currency.code_visible" :read-only="true" :precision="2"></vue-numeric>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <router-link :to="{name: 'updatecredit', params:{credit: credit, customer: getCustomer(index)}}">
                            <a href="javascript:void(0)" class="btn btn-primary">Editar</a>
                          </router-link>
                        </li>
                        <li>
                          <a href="javascript:void(0)" class="btn btn-danger" @click="deleteCredit(credit, index)">Eliminar</a>
                        </li>
                      </ul>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
</template>

<script src="./Credits.js"></script>
