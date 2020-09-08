<template>
  <div class="ui-margin-large-top" style="padding:2rem;">
        <div class="ui-margin-large-bottom">
            <div class="ui-row form-collection">
                <div class="ui-column-12">
                    <div class="ui-input-group">
                        <label class="ui-label ui-margin-small-bottom ui-color-secondary">Cliente</label>
                        <vue-tags-input
                            v-model="tag_customer"
                            placeholder="Cliente"
                            :tags="parameters.customers"
                            :autocomplete-items="parameters.customers_autocomplete"
                            :add-only-from-autocomplete="true"
                            :max-tags="1"
                            @tags-changed="updateCustomersTags">
                        </vue-tags-input>
                    </div>
                </div>
            </div>
            <div class="detailed_debt">
                <div class="ui-row">
                    <div class="ui-column-6">
                        <div class="ui-input-group">
                            <label class="ui-label ui-color-secondary">Moneda</label>
                            <select name="currency_selected" id="currency_selected" v-model="currency_selected" class="ui-input">
                                <option v-for="(currency, index) in currencies" :key="index" :value="currency">{{ currency.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="ui-column-6">
                        <div class="ui-input-group">
                            <label class="ui-label ui-color-secondary">Tipo</label>
                            <select name="type" id="type" v-model="type" class="ui-input">
                                <option value="amount">Monto máximo</option>
                                <option value="deadline">Fecha tope</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="ui-row">
                    <div class="ui-column-6">
                        <div class="ui-input-group">
                            <label class="ui-label ui-color-secondary">Monto</label>
                            <input
                            name="amount"
                            id="'amount"
                            data-rule-required="true"
                            data-msg-required="Nombres requeridos"
                            class="ui-input firstname"
                            v-model="amount"
                            placeholder="Monto">
                        <!-- <vue-numeric 
                            :class="ui-input firstname"
                            v-model="amount"
                            :separator="currency_selected.separator"
                            :decimal-separator="currency_selected.decimal_separator"
                            :currency="currency_selected.code_visible"
                            :precision="2">
                            class="text-right ui-input firstname"
                        </vue-numeric> -->

                        </div>
                    </div>
                    <div class="ui-column-6" v-if="type == 'deadline'">
                        <div class="ui-input-group">
                            <label class="ui-label ui-color-secondary">Día de corte</label>
                            <select name="weekday" id="weekday" v-model="day_selected" class="ui-input">
                                <option v-for="(day, index) in parameters.week_days" :key="index" :value="'next '+day">{{day}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="ui-row">
                    <router-link to="/credits">
                        <button class="ui-button ui-button--secondary">Volver</button>
                    </router-link>
                    <button class="ui-button ui-button--secondary" @click="newCredit">Crear Crédito</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./CreateCredit.js"></script>
