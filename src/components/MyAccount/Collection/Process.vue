<template>
  <div class="ui-margin-large-top" style="padding:2rem;">
      <div class="ui-margin-large-bottom">
        <h5>Gestion de cobranza</h5>
        <div class="ui-row form-collection">
          <div class="ui-column-6">
            <div class="ui-input-group">
                <label class="ui-label ui-margin-small-bottom ui-color-secondary">Clientes</label>
                <vue-tags-input
                  v-model="tag_customer"
                  placeholder="Reporte consolidado (Todos)"
                  :tags="customer"
                  :autocomplete-items="parameters.customers_autocomplete"
                  :add-only-from-autocomplete="true"
                  :max-tags="1"
                  @tags-changed="updateCustomersTags">
                </vue-tags-input>
            </div>
          </div>
          <div class="ui-column-6">
            <div class="ui-input-group">
              <label class="ui-label ui-margin-small-bottom ui-color-secondary" for="detailed">TKT No.</label>
              <input type="text" id="tktToFind" name="tktToFind" class="ui-input" v-model="tktToFind">

            </div>
          </div>
        </div>
        <div class="ui-row" v-if="!loading_info">
          <div class="ui-column-3">
            <button class="ui-button ui-button--secondary" @click="getDebt">Obtener deuda</button>
          </div>
        </div>
        <div class="ui-row" v-else>
          <div class="ui-column-3">
            <vue-loading type="bubbles" color="#003366" :size="{ width: '70px', height: '70px' }"></vue-loading>
          </div>
        </div>
        <to-process v-if="data_loaded" :invoices="data_debt"></to-process>
      </div>

    </div>
</template>

<script src="./Process.js"></script>
