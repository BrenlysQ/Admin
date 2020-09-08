<template>
  <div class="report_general debt_report" id="debts_report">
    <fullscreen class="fs_wrapper" background="#fff" ref="fullscreen">
      <div class="ui-row ui-justify-content-between header_report">
        <div class="ui-column-10">
          <h2 class="title_report">Reporte <span v-if="!dataReport.consolidated">específico</span><span v-else>consolidado</span> de cobranza</h2>
          <h3 class="heading">{{today}}</h3>
          <h3 class="heading">Generado por: {{userloged}}</h3>
        </div>
        <div class="ui-column-2" id="export_controls">
          <a href="javascript:void(0)" @click="toPrint">Imprimir</a>&nbsp;
          <a href="javascript:void(0)">Pdf</a>&nbsp;
          <a href="javascript:void(0)" @click="viewFS">Full</a>
        </div>
      </div>
      <div v-for="(debt, afi) in dataReport.debts" v-bind:key="'afilliate' + afi" class="ui-row body_report">
        <div class="ui-column-12 affiliate">
          <h3>{{debt.affiliate}}</h3>
        </div>
        <div v-for="(debt_tot, debti) in debt.debts" v-bind:key="'debt-' + debti + '-' + afi" :class="(dataReport.detailed) ? 'ui-column-12 debt_detailed' : 'ui-column-3 debt_detail'">
          <h4 class="debt_title">Deuda en {{debt_tot.currency_name}}</h4>
          <div class="detailed_debt" v-if="dataReport.detailed">
            <table class="ui-tables">
              <thead>
                  <tr>
                      <th class="ui-color-secondary">No. Factura</th>
                      <th class="ui-color-secondary">Emisión</th>
                      <th class="ui-color-secondary">Items</th>
                      <th class="ui-color-secondary">Solicitado</th>
                      <th class="ui-color-secondary total_amount">Total</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="cn in debt_tot.details" :key="'CN-' + cn.id">
                      <td>{{ cn.invoice.id }}</td>
                      <td>{{ cn.created_at }}</td>
                      <td>XXXXXX</td>
                      <td>Juacito Camargo</td>
                      <td class="total_amount"><vue-numeric v-model="cn.total_amount" :currency="debt_tot.currency_code" :read-only="true" :precision="2"></vue-numeric></td>
                  </tr>
              </tbody>
            </table>
          </div>
          <div class="total_debt" v-else>
            <h4>Facturas pendiente: {{debt_tot.qty}}</h4>
            <h4 class="total_report">Total: <vue-numeric v-model="debt_tot.total" :currency="debt_tot.currency_code" :read-only="true" :precision="2"></vue-numeric></h4>
          </div>
        </div>
      </div>
      <div  class="ui-row body_report totalizer">
        <div class="ui-column-12 affiliate">
          <h3>TOTAL PENDIENTE</h3>
        </div>
        <div v-for="(currency, curri) in dataReport.currencies" v-bind:key="'curr' + curri" class="ui-column-3 debt_detail">
          <h4 class="debt_title">Deuda en {{currency.name}}</h4>
          <div class="total_debt">
            <h4>Facturas pendiente: {{currency.qty}}</h4>
            <h4 class="total_report">Total: <vue-numeric v-model="currency.total" :currency="currency.code" :read-only="true" :precision="2"></vue-numeric></h4>
          </div>
        </div>
      </div>
    </fullscreen>
  </div>
</template>
<script src="./Report.js"></script>
