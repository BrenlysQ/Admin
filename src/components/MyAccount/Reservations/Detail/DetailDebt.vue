<template>
    <div class="dashboard-invoice detail-invoice" >
      <fullscreen class="fs_wrapper" background="#fff" ref="fullscreen">
        <div class="dashboard-reservation__card" id="detailed_invoice">
          <div class="invoice-detail-controls" id="invoice_controls">
            <i class="fa fa-print" @click="toPrint"></i>
            <i class="fa fa-window-maximize" @click="viewFS"></i>
          </div>
          <div class="dashboard-reservation__header">
              <h1>Factura: # {{invoice.id}}</h1>
          </div>
          <div class="dashboard-reservation__body">
              <div class="dashboard-reservation__row">
                  <div class="ui-row ui-flex ui-align-items">
                    <div class="ui-column-3 ui-flex">
                        <p class="ui-font-small-size"><span class="invoice-title">Generada:</span> {{invoice.created_at | invoice_date}}</p>
                    </div>
                    <div class="ui-column-3  ui-flex">
                      <p class="ui-color-success  ui-font-small-size">
                        En espera de emisión.
                      </p>
                    </div>
                    <div class="ui-column-3 ui-flex">
                      <div>
                        <p class="ui-color-success ui-font-small-size" v-if="invoice.administration_status == 4">Pagada a crédito (pendiente)</p>
                        <p class="ui-color-danger ui-font-small-size"  v-else-if="left_to_paid > 0">Por Pagar:
                            <vue-numeric :currency="getInvoiceInfo(invoice, 'currency')" :decimal-separator="getInvoiceInfo(invoice, 'decimal')" :separator="getInvoiceInfo(invoice, 'separator')" :read-only="true" :precision="2" :value="(invoice.total_amount - invoice.total_paid)"></vue-numeric>
                        </p>
                        <p class="ui-color-success ui-font-small-size" v-else-if="left_to_paid <= 0">Factura pagada</p>
                      </div>
                    </div>
                    <div class="ui-column-3 total_amount">
                      <p style="font-size: 16px; text-align:right;" class="ui-color-success">
                          Total:
                          <vue-numeric :currency="getInvoiceInfo(invoice, 'currency')" :decimal-separator="getInvoiceInfo(invoice, 'decimal')" :separator="getInvoiceInfo(invoice, 'separator')" :read-only="true" :precision="2" :value="invoice.total_amount"></vue-numeric>
                      </p>
                    </div>
                  </div>
              </div>
              <div class="dashboard-reservation__row">
                  <div class="ui-row ui-flex ui-align-items">
                      <div class="ui-column-3 ui-flex">
                        <p class="ui-font-small-size"><span class="invoice-title">Cliente:</span> {{invoice.contact_pax | name_customer}}</p>
                      </div>
                      <div class="ui-column-3 ui-flex">
                        <p class="ui-font-small-size"><span class="invoice-title">Teléfono:</span> </p>
                      </div>
                      <div class="ui-column-3 ui-flex">
                        <p class="ui-font-small-size"><span class="invoice-title">Email:</span> </p>
                      </div>
                      <div class="ui-column-3 reservation-total ui-flex ui-justify-content-flex-end">
                        <p class="ui-font-small-size"><span class="invoice-title">Divisa:</span> {{invoice.currency_data.name}}</p>
                      </div>
                  </div>
              </div>
              <div class="dashboard-reservation__row">
                  <div class="ui-row ui-flex ui-align-items">
                      <div class="ui-column-6 ui-flex">
                        <p class="ui-font-small-size">
                          <span class="invoice-title">Vendedor:</span> {{seller_info(invoice)}}
                        </p>
                      </div>
                  </div>
              </div>
              <h3 class="invoice-title-lg">Items reservados</h3>
              <div v-for="(item,kitem) in invoice.items" :key="item.id">
                  <flight
                      v-if="item.invoice_type == 'ItinModel'"
                      :item="item"
                      :menu-selected="menu_iselected"
                      :currency="invoice.currency_data"
                  >
                  </flight>
                  <hotel
                      v-if="item.invoice_type == 'HotusaBooking'"
                      :item="item"
                      :menu-selected="menu_iselected"
                      :currency="invoice.currency_data"
                  >
                  </hotel>
                  <security
                  v-if="item.invoice_type == 'VoucherModel'"
                  :item="item"
                  :currency="invoice.currency_data"
                  >
                  </security>
                  <false-itinerary
                  v-if="item.invoice_type == 'FalseItineraryModel'"
                  :item="item"
                  :menu-index="kitem"
                  :menu-selected="menu_iselected"
                  :currency="invoice.currency_data"
                  >
                  </false-itinerary>
              </div>
              <div class="dashboard-reservation__row">
                <div class="ui-row ui-flex ui-align-items more-details">
                  <div class="ui-column-3">
                    <h3 class="invoice-title-lg">Montos</h3>
                    <p class="invoice-total"><span class="invoice-amount">Base: </span>
                      <vue-numeric :currency="getInvoiceInfo(invoice, 'currency')" :decimal-separator="getInvoiceInfo(invoice, 'decimal')" :separator="getInvoiceInfo(invoice, 'separator')" :read-only="true" :precision="2" :value="invoice.total_base + invoice.feepu"></vue-numeric>
                      &nbsp;|&nbsp;
                    </p>
                    <p class="invoice-total"><span class="invoice-amount">Fee: </span>
                      <vue-numeric :currency="getInvoiceInfo(invoice, 'currency')" :decimal-separator="getInvoiceInfo(invoice, 'decimal')" :separator="getInvoiceInfo(invoice, 'separator')" :read-only="true" :precision="2" :value="invoice.total_fee"></vue-numeric>
                       &nbsp;|&nbsp;
                    </p>
                    <p class="invoice-total"><span class="invoice-amount">Impuestos: </span>
                      <vue-numeric :currency="getInvoiceInfo(invoice, 'currency')" :decimal-separator="getInvoiceInfo(invoice, 'decimal')" :separator="getInvoiceInfo(invoice, 'separator')" :read-only="true" :precision="2" :value="invoice.total_tax"></vue-numeric>
                      &nbsp;|&nbsp;
                    </p>
                    <p class="invoice-total"><span class="invoice-amount">Total: </span>
                      <vue-numeric :currency="getInvoiceInfo(invoice, 'currency')" :decimal-separator="getInvoiceInfo(invoice, 'decimal')" :separator="getInvoiceInfo(invoice, 'separator')" :read-only="true" :precision="2" :value="invoice.total_amount"></vue-numeric>
                      &nbsp;|&nbsp;
                    </p>
                    <p class="invoice-grandtotal"><span class="invoice-amount ui-color-danger">Deuda: </span>
                      <vue-numeric :read-only-class="'ui-color-danger'" :currency="invoice.currency_data.code_visible" :decimal-separator="invoice.currency_data.decimal_separator" :separator="invoice.currency_data.separator" :read-only="true" :precision="2" :value="invoice.credit_note.total_amount"></vue-numeric>
                    </p>
                  </div>
                  <div class="ui-column-9">
                    <h3 class="invoice-title-lg">Pagos realizados</h3>
                    <paymentslist :invoice="invoice"></paymentslist>
                  </div>
                </div>
                <div class="ui-row ui-flex ui-align-items">
                  <div class="ui-column-3">
                    <button class="ui-button ui-button--secondary" @click="$router.go(-1)">Volver</button>
                  </div>
                </div>
              </div>
          </div>
      </div>
      </fullscreen>
    </div>
</template>
<script src="./DetailDebt.js"></script>
