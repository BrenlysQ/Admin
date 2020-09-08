<template>
  <div class="ui-margin-large-top" style="padding:2rem;">
      <div class="ui-margin-large-bottom">
        <div class="ui-row form-collection">
          <div class="ui-column-12">
            <div class="ui-input-group">
                <label class="ui-label ui-margin-small-bottom ui-color-secondary">Clientes</label>
                <vue-tags-input
                  v-model="tag_customer"
                  placeholder="Reporte consolidado (Todos)"
                  :tags="parameters.customers"
                  :autocomplete-items="parameters.customers_autocomplete"
                  :add-only-from-autocomplete="true"
                  @tags-changed="updateCustomersTags">
                </vue-tags-input>
            </div>
          </div>
          <div class="ui-column-12">
            <div class="ui-input-group">
              <input type="checkbox" id="detailed" name="detailed" value="1" v-model="detailed">
              <label for="detailed">Detallado</label>
            </div>
          </div>
        </div>
        <div class="ui-row">
          <button class="ui-button ui-button--secondary" @click="getReport">Obtener reporte</button>
        </div>
      </div>
      <collection-report v-if="report_loaded" :data-report="data_report"></collection-report>
    </div>
</template>

<script src="./Collection.js"></script>
