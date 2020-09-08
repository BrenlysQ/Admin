<template>
  <div class="ui-margin-large-top" style="padding:2rem;">
      <div class="ui-margin-large-bottom">
        <div class="ui-row form-collection">
          <div class="ui-column-12">
            <div class="ui-input-group">
                <label class="ui-label ui-margin-small-bottom ui-color-secondary">Clientes</label>
                <input type="text" name="" v-model="tag_customer">
            </div>
          </div>
          <div class="ui-column-12" v-if="parameters.customers_autocomplete.length > 0">
            <table class="ui-tables">
              <thead>
                  <tr class="ui-bg-primary-light">
                      <th class="ui-color-secondary">Cliente</th>
                      <th class="ui-color-secondary">Codigo</th>
                      <th class="ui-color-secondary">Tipo</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="(aff, keyaff) in parameters.customers_autocomplete" :key="'aff-' + keyaff">
                  <td>{{aff.text}}</td>
                  <td>{{aff.id}}</td>
                  <td>{{aff.type}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="ui-column-3" v-else-if="loading">
            <vue-loading type="bubbles" color="#003366" :size="{ width: '70px', height: '70px' }"></vue-loading>
          </div>
        </div>
      </div>
    </div>
</template>

<script src="./AffReqCode.js"></script>
