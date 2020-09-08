<template>
    <div class="dashboard-asociates">

        <div class="ui-row ui-justify-content-between ui-margin-large-bottom">

            <div class="ui-column-3 ui-flex ui-justify-content-flex-start">

                <input type="text" v-model="inv_filters.free_text" placeholder="Buscar" class="ui-input">

            </div>
            <div class="ui-column-1 ui-flex">

                

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

                <tr v-for="payment in payments" >
                    <td> {{ payment.id }} </td>
                    <td> {{ payment.payment_date }}</td>

                    <td> {{ payment.satellite.name }} </td>

                    <td> {{ payment.total_paid }} </td>

                    <td> {{ payment.idcurrency | currency }} </td>

                    <td> {{ payment.amount }} </td>

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

<script src="./Payments.js"></script>
