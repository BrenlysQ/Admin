<template>
  <div class="ui-margin-large-top load_affiliates" style="padding:2rem;">
    <div class="ui-column-6">
      <div class="ui-input-group">
          <label class="ui-label ui-margin-small-bottom ui-color-secondary">Selecciona el archivo</label>
          <input type="file" id="data_file" ref="data_file"/>
      </div>
    </div>
    <div class="ui-column-6" v-if="!first_load">
      <h4 class="title-detail">Resultados</h4>
      <div class="header-detail" v-if="file_data.affiliates.length > 0">
        <div>Clientes a registrar ({{file_data.affiliates.length}}) <a href="javascript:void(0)" @click="view_detail('toregister')">Ver detalle</a></div>
        <div v-if="detail_view == 'toregister'">
          <table class="ui-tables">
            <thead>
                <tr class="ui-bg-primary-light">
                    <th class="ui-color-secondary">Cliente</th>
                    <th class="ui-color-secondary">Email</th>
                    <th class="ui-color-secondary">Ciudad</th>
                    <th class="ui-color-secondary">Tipo</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="(aff, keyaff) in file_data.affiliates" :key="'aff-' + keyaff">
                <td>{{aff.name}}</td>
                <td>{{aff.email}} <span v-if="aff.email_generated">(autogenerado)</span></td>
                <td>{{aff.city}}</td>
                <td>{{aff.type}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="header-detail" v-if="file_data.tochange.length > 0">
        <div>Cambios de rol ({{file_data.tochange.length}}) <a href="javascript:void(0)" @click="view_detail('rolchanges')">Ver detalle</a></div>
        <div v-if="detail_view == 'rolchanges'">
          <table class="ui-tables">
            <thead>
                <tr class="ui-bg-primary-light">
                    <th class="ui-color-secondary">Cliente</th>
                    <th class="ui-color-secondary">Register as</th>
                    <th class="ui-color-secondary">Cambiara a</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="(aff, keyaff) in file_data.tochange" :key="'afftc-' + keyaff">
                <td>{{aff.name}}</td>
                <td>{{aff.resgister_as}}</td>
                <td>{{aff.type}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="header-detail" v-if="file_data.already_registereds.length > 0">
        <div>Previamente registrados ({{file_data.already_registereds.length}}) <a href="javascript:void(0)" @click="view_detail('already')">Ver detalle</a></div>
        <div v-if="detail_view == 'already'">
          <table class="ui-tables">
            <thead>
                <tr class="ui-bg-primary-light">
                    <th class="ui-color-secondary">Cliente</th>
                    <th class="ui-color-secondary">Email</th>
                    <th class="ui-color-secondary">Ciudad</th>
                    <th class="ui-color-secondary">Tipo</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="(aff, keyaff) in file_data.already_registereds" :key="'affre-' + keyaff">
                <td>{{aff.name}}</td>
                <td>{{aff.email}}</td>
                <td>{{aff.city}}</td>
                <td>{{aff.type}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="header-detail" v-if="file_data.invalid_type.length > 0">
        <div>Registros invalidos ({{file_data.invalid_type.length}}) <a href="javascript:void(0)" @click="view_detail('invalid_type')">Ver detalle</a></div>
        <div v-if="detail_view == 'invalid_type'">
          <table class="ui-tables">
            <thead>
                <tr class="ui-bg-primary-light">
                    <th class="ui-color-secondary">Cliente</th>
                    <th class="ui-color-secondary">Email</th>
                    <th class="ui-color-secondary">Ciudad</th>
                    <th class="ui-color-secondary">Tipo declarado</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="(aff, keyaff) in file_data.invalid_type" :key="'affinv-' + keyaff">
                <td>{{aff.name}}</td>
                <td>{{aff.email}}</td>
                <td>{{aff.city}}</td>
                <td>{{aff.type1}} - {{aff.type2}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="ui-column-6 file-controls" v-if="!loading_info">
      <button class="ui-button ui-button--secondary" @click="loadItems">
        <span v-if="first_load">Analizar archivo</span>
        <span v-else>Analizar archivo de nuevo</span>
      </button>&nbsp;
      <button class="ui-button ui-button--secondary" v-if="!first_load" @click="send_items">
        <span>Aceptar (guardar)</span>
      </button>
    </div>
    <div class="ui-column-3" v-else>
      <vue-loading type="bubbles" color="#003366" :size="{ width: '70px', height: '70px' }"></vue-loading>
      Analizando...
    </div>
  </div>
</template>

<script src="./Asociates.js"></script>
