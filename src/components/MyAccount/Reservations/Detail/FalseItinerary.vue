<template>
    <div class="dashboard-reservation__row">

        <div class="ui-row ui-flex ui-align-items">

            <div class="ui-column-3 ui-flex ui-align-items">

                <div class="dashboard-reservation__image">

                    <img src="~@/assets/flight-line.png" alt="">

                </div>

                <h1 class="ui-color-secondary">{{itin.route}}</h1>

            </div>
            <div class="ui-column-3 ui-flex">
              <p  style="font-size: 14px;" class="ui-margin-medium-right">{{itin.contact_pax}}</p>
              <div class="dashboard-reservation__airline">

                  <img class="hidden-xs" :src="'//viajesplusultra.com/airlines/80x25/' + itin.airline + '.png'">
                  <!-- <img class="visible-xs" :src="'//viajesplusultra.com/airlines/30x30/' + itin.airline + '.png'"> -->

              </div>
            </div>

            <div class="ui-column-3 ui-flex ui-align-items reservation-center">

                <p style="font-size: 14px;">{{itin.due_date}}</p>&nbsp;


                <p class="reservation-text">{{itin.tkt}}</p>

            </div>

            <div class="ui-column-2 ui-flex last_amount ui-align-items ui-justify-content-flex-end">

                <h1 class="ui-color-primary" style="font-size: 14px;">
                    <vue-numeric :currency="currency.code_visible" :decimal-separator="currency.decimal_separator" :separator="currency.decimal_separator" :read-only="true" :precision="2" :value="itin.total"></vue-numeric>
                </h1>

            </div>

            <div class="ui-column-1 table-dropdown">
                <div class="uchip-drop-container">
                  <div class="uchip-drop-title" @click="setMenu(menuIndex)">
                    <i class="fa fa-bars"></i>
                  </div>
                  <ul class="uchip-drop-menu active" v-if="menuSelected == menuIndex">
                    <li>
                      <router-link :to="{name:'pnr', params: {itinErario: item.invoiceable}}">
                          Agregar datos de los pasajeros
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{name:'pnr', params: {itinErario: item.invoiceable}}">
                          Ver detalles
                      </router-link>
                    </li>
                  </ul>
                </div>

            </div>

        </div>

    </div>
</template>

<script src="./FalseItinerary.js"></script>
