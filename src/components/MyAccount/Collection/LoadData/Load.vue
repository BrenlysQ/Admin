<template>
  <div class="ui-margin-large-top" style="padding:2rem;">
    <div class="ui-row">
      <div class="ui-column-5">
        <div class="ui-input-group">
            <label class="ui-label ui-margin-small-bottom ui-color-secondary">Selecciona el archivo</label>
            <input type="file" id="data_file" ref="data_file"/>
        </div>
        <div class="ui-input-group">
          <input type="checkbox" id="detailed" name="detailed" value="1" v-model="detailed">
          <label for="detailed">Detallado</label>
        </div>
        <div class="">
          <select class="ui-input" v-model="selected_currency">
            <option value="3">Bolivares</option>
            <option value="4">Dolares</option>
          </select>
        </div>
        <div v-if="!loading_info">
          <button class="ui-button ui-button--secondary" @click="loadItems">
            <span v-if="first_load">Analizar archivo</span>
            <span v-else>Analizar archivo de nuevo</span>
          </button>&nbsp;
          <button class="ui-button ui-button--secondary" v-if="!first_load" @click="send_items">
            <span>Aceptar (guardar)</span>
          </button>
        </div>
        <div v-else>
          <vue-loading type="bubbles" color="#003366" :size="{ width: '70px', height: '70px' }"></vue-loading>
        </div>
      </div>
      <div class="ui-column-6" v-if="!first_load && !loading_info">
        <span>Resultado</span>
        <p class="ui-color-secondary"><span>Lineas analizadas:</span> {{file_data.item_qty}}</p>
        <p class="ui-color-danger"><span>Errores encontrados:</span> {{file_data.errors.count}}</p>
        <p class="ui-color-success"><span>TKT'S Emitidos:</span> {{file_data.item_qty - file_data.errors.count}}</p>
        <p v-if="file_data.unregistereds.length > 0" class="ui-color-danger">
          <span>Clientes desconocidos:</span> {{file_data.unregistereds.length}}
          <span><a href="javascript:void(0)" @click="details_view = 'unknows_customers'">Ver detalles</a></span>
        </p>
        <p v-if="file_data.errors_tkts.length > 0" class="ui-color-danger">
          <span>TKT'S Duplicados:</span> {{file_data.errors_tkts.length}}
          <span><a href="javascript:void(0)" @click="details_view = 'tkt_duplicateds'">Ver detalles</a></span
        </p>
        <p class="ui-color-success">
          <span>Deuda analizada:</span>&nbsp;<vue-numeric v-model="file_data.total_analyzed" :currency="file_data.currency.code_visible" :read-only="true" :precision="2"></vue-numeric>
          <span><a href="javascript:void(0)" @click="details_view = 'analyzed_view'">Ver detalles</a></span>
        </p>
        <p :class="file_data.total_analyzed < file_data.grand_total ? 'ui-color-danger' : 'ui-color-success'"><span>Deuda en reporte:</span>&nbsp;
          <vue-numeric v-model="file_data.grand_total" :currency="file_data.currency.code_visible" :read-only="true" :precision="2"></vue-numeric>
        </p>
      </div>
    </div>
    <div class="ui-row" v-if="!first_load && !loading_info">
      <h5 class="ui-color-danger alert_load">ATENCION: Aun no se cargado la data, para terminar la carga debe aceptar (guardar)</h5>
      <div class="ui-column-12" v-if="details_view == 'analyzed_view'">
        <span>Detalles</span>
        <table class="ui-tables">
          <thead>
              <tr class="ui-bg-primary-light">
                  <th class="ui-color-secondary">Cliente</th>
                  <th class="ui-color-secondary">Codigo</th>
                  <th class="ui-color-secondary">Sucursal</th>
                  <th class="ui-color-secondary">Tkt's</th>
                  <th class="ui-color-secondary total_amount">Deuda</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="(aff, keyaff) in file_data.customers" :key="'aff-' + keyaff">
              <td>{{aff.name}}</td>
              <td>{{aff.code}}</td>
              <td>{{aff.city}}</td>
              <td>{{aff.tkts}}</td>
              <td class="total_amount">
                <vue-numeric v-model="aff.total" :currency="file_data.currency.code_visible" :read-only="true" :precision="2"></vue-numeric>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="total_amount collection-load-total">Total: <span>
          <vue-numeric v-model="file_data.total_analyzed" :currency="file_data.currency.code_visible" :read-only="true" :precision="2"></vue-numeric>
        </span></p>
      </div>
      <div class="ui-column-12" v-if="details_view == 'tkt_duplicateds'">
        <span>Tickets duplicados</span>
        <table class="ui-tables">
          <thead>
              <tr class="ui-bg-primary-light">
                  <th class="ui-color-secondary">Linea</th>
                  <th class="ui-color-secondary">Tkt</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="(tkt, keytkt) in file_data.errors_tkts" :key="'tkt-' + keytkt">
              <td>{{tkt.index}}</td>
              <td>{{tkt.type}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="ui-column-12" v-if="details_view == 'unknows_customers'">
        <span>Clientes deconocidos</span>
        <table class="ui-tables">
          <thead>
              <tr class="ui-bg-primary-light">
                  <th class="ui-color-secondary">Nombre</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="(uknc, kuknc) in file_data.unregistereds" :key="'unknow-' + uknc">
              <td>{{uknc.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script src="./Load.js"></script>
