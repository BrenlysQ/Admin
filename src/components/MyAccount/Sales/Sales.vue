<template>
    <div class="dashboard-asociates">

        <div class="ui-row ui-justify-content-between ui-margin-large-bottom">

            <div class="ui-column-3 ui-flex ui-justify-content-flex-start">

                <input type="text" v-model="inv_filters.free_text" placeholder="Buscar" class="ui-input">

            </div>
            <div class="ui-column-1 ui-flex">

                <select class="" v-model="inv_filters.item_type">
                  <option value="" selected>Todos</option>
                  <option value="ItinModel">Vuelos (TKT)</option>
                  <option value="HotusaBooking">Hoteles</option>
                  <option value="VoucherModel">Seguros</option>
                </select>

            </div>
            <div class="ui-column-1 ui-flex">

                <button class="ui-button ui-button--secondary">Buscar</button>

            </div>

        </div>

        <table class="ui-tables">

            <thead>

                <tr class="ui-bg-primary-light">

                    <th v-for="itemsHead in tableHead" :key="itemsHead.id" class="ui-color-secondary">{{ itemsHead.name }}</th>

                </tr>

            </thead>

            <tbody>

                <tr v-for="invoice in invoices" v-if="filters_applied(invoice)" :key="invoice.id">
                    <td> {{ invoice.id }} </td>
                    <td> {{ invoice.contact_pax.name }} {{ invoice.contact_pax.last_name }}</td>

                    <td> {{ invoice.created_at }} </td>

                    <td> {{ invoice.total_paid }} </td>

                    <td> {{ (invoice.total_amount - invoice.total_paid) }} </td>

                    <td> {{ invoice.total_amount }} </td>

                    <!-- <td :class="{'ui-color-danger' : invoice.status == 'Bloqueado'}"> {{ invoice.status }} </td>

                    <td>

                        <button type="button" name="edit" class="ui-button ui-button--small-icon ui-button--warning ui-margin-small-right" title="Editar">

                            <icon-edit
                                fillPrimary="fill-white"
                                fillSecondary="fill-white"
                                iconWidth="16">
                            </icon-edit>

                        </button>

                        <button type="button" name="edit" class="ui-button ui-button--small-icon ui-button--danger ui-margin-small-right" title="Desactivar">

                            <icon-edit
                                fillPrimary="fill-white"
                                fillSecondary="fill-white"
                                iconWidth="16">
                            </icon-edit>

                        </button>

                        <button type="button" name="edit" class="ui-button ui-button--small-icon ui-button--success ui-margin-small-right" title="Reactivar">

                            <icon-edit
                                fillPrimary="fill-white"
                                fillSecondary="fill-white"
                                iconWidth="16">
                            </icon-edit>

                        </button>

                        <button type="button" name="edit" class="ui-button ui-button--small-icon ui-button--primary ui-margin-small-right" title="Graficas de Ventas">

                            <icon-edit
                                fillPrimary="fill-white"
                                fillSecondary="fill-white"
                                iconWidth="16">
                            </icon-edit>

                        </button>

                    </td> -->

                </tr>

            </tbody>

        </table>

    </div>
</template>

<script src="./Sales.js"></script>
