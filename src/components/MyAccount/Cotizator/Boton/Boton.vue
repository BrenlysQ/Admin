<template>
	<div class="cotizator-button ui-margin-large-top">
        <div class="ui-margin-large-bottom">
            <div class="ui-row ui-justify-content-between">
                <!-- Inicio Ida y Vuelta -->
                <div class="ui-column-6">
                    <div class="cotizator-button__type">
                        <div class="ui-flex ui-align-items ui-margin-right">
                            <div class="ui-radio ui-margin-small-right">
                                <input type="radio" id="radio#1" name="selector" />
                                <label for="radio#1"></label>
                            </div>
                            <p class="ui-font-small-size">Ida y Vuelta</p>
                        </div>
                        <div class="ui-flex ui-align-items">
                            <div class="ui-radio ui-margin-small-right">
                                <input type="radio" id="radio#2" name="selector" />
                                <label for="radio#2"></label>
                            </div>
                            <p class="ui-font-small-size">Solo Ida</p>
                        </div>
                    </div>
                </div>
                <!-- Fin Ida y Vuelta -->
                <!-- Inicio Clase -->
                <div class="ui-column-2">
                    <div class="cotizator-button__class" v-on-clickaway="closeClass">
                        <label class="ui-font-small-size ui-font-weight-bold ui-margin-small-right ui-color-secondary">Clase</label>
                        <div class="ui-select" @click="openClass">
                            <a class="ui-select__button ui-color-primary">
                                    {{ classFlight }}
                                    <icon-arrow-toggle
                                        :class="{ 'rotate-right' : isClass }"
                                        fillSecondary="fill-secondary"
                                        iconWidth="15">
                                    </icon-arrow-toggle>
                                </a>
                            <ul class="ui-select__content" :class="{ open : isClass }">
                                <li class="ui-select__items" v-for="item in classList" :key="item.id">
                                    <a @click="selectClass(item.class)">{{ item.class }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Fin Clase -->
            </div>
        </div>
        <div class="ui-row">
            <!-- Inicio Origen -->
            <div class="cotizator-button__departure ui-column-6">
                <div class="ui-input-group">
                    <label class="ui-label ui-margin-small-bottom ui-flex ui-align-items ui-color-secondary">
                        <icon-map
                            class="ui-margin-small-right"
                            fillSecondary="fill-secondary"
                            iconWidth="15">
                        </icon-map>
                            Origen
                        </label>
                    <input type="text" class="ui-input ui-color-primary" v-on:keyup="showTypehead()" placeholder="Caracas">
                </div>
            </div>
            <!-- Fin Origen -->
            <!-- Inicio Destino -->
            <div class=" cotizator-button__destination ui-column-6">
                <div class="ui-input-group">
                    <label class="ui-label ui-margin-small-bottom ui-color-secondary">
                        <icon-map
                            class="ui-margin-small-right"
                            fillSecondary="fill-secondary"
                            iconWidth="15">
                        </icon-map>
                            Destino
                        </label>
                    <!-- <input type="text" class="ui-input ui-color-primary" v-on:keyup="showTypehead()" placeholder="Miami"> -->
                    <autocomplete
                        source="https://api.github.com/search/repositories?q="
                        results-property="items"
                        inputClass="ui-input"
                        placeholder="Miami"
                        results-display="full_name">
                    </autocomplete>
                </div>
            </div>
            <!-- Fin Destino -->
        </div>
        <div class="ui-row">
            <!-- Inicio Salida -->
            <div class="cotizator-button__departure ui-column-3">
                <div class="ui-input-group">
                    <label class="ui-label ui-margin-small-bottom ui-color-secondary" :class="{ labelActive : isInput }">
                        <icon-arrow
                            class="ui-margin-small-right"
                            fillSecondary="fill-secondary"
                            iconWidth="15"
                            direction="rotate-right">
                        </icon-arrow>
                            Salida
                        </label>
                    <datepicker
                        :value="state.date"
                        name="uniquename"
                        :minimum-view="state.minDate"
                        :disabledDates="disabledDates"
                        :format="customFormatter"
                        :input-class="{'ui-color-primary': 'class', 'ui-input': 'class'}"
                        >
                    </datepicker>
                </div>
            </div>
            <!-- Fin Salida -->
            <!-- Inicio Retorno -->
            <div class="ui-column-3 cotizator-button__return">
                <div class="ui-input-group">
                    <label class="ui-label ui-margin-small-bottom ui-color-secondary">
                        <icon-arrow
                            class="ui-margin-small-right"
                            fillSecondary="fill-secondary"
                            iconWidth="15">
                        </icon-arrow>
                            Retorno
                        </label>
                    <datepicker
                        :value="state.date"
                        name="uniquename"
                        :minimum-view="state.minDate"
                        :disabledDates="disabledDates"
                        :format="customFormatter"
                        :input-class="{'ui-color-primary': 'class', 'ui-input': 'class'}"
                        >
                    </datepicker>
                </div>
            </div>
            <!-- Fin Retorno -->
            <!-- Pasajeros -->
            <div class="ui-column-3 ui-align-items" v-on-clickaway="closeOptions">
                <span class="ui-relative ui-block">
                    <label class="ui-label ui-margin-small-bottom ui-color-secondary">
                    <icon-passengers
                        class="ui-margin-small-right"
                        fillSecondary="fill-secondary"
                        iconWidth="15">
                    </icon-passengers>
                        Pasajeros
                    </label>
                    <div class="cotizator-button__passengers" @click="openOptions()">
                        <p class="ui-color-primary">{{ adults + childs + guests  }} Pasajeros</p>
                        <icon-arrow-toggle
                        :class="{ 'rotate-right' : isOptions }"
                        fillSecondary="fill-secondary"
                        iconWidth="15">
                        </icon-arrow-toggle>
                    </div>
                    <div class="cotizator-button__options" :class="{ open : isOptions }">
                        <div v-if="adults + childs + guests < 1" class="cotizator-button__options__error">
                            <p>Selecciona minimo un pasajero</p>
                        </div>
                        <!-- Adultos -->
                        <div class="cotizator-button__option">
                            <div>
                                <h1>Adultos</h1>
                                <p class="ui-font-extra-small-size ui-color-grey">Mayores de 18 años</p>
                            </div>
                            <div class="ui-flex ui-align-items">
                                <span v-on:click="deleteAdults()" class="ui-margin-right ui-flex ui-align-items">
                                    <svg viewBox="0 0 30 30" style="width:22px;">
                                        <path class="fill-secondary ui-pointer" :class="{ 'fill-danger' : adults + childs + guests < 1 }" d="M14.9,1.6C7.4,1.6,1.3,7.7,1.3,15.2s6.1,13.7,13.7,13.7s13.7-6.1,13.7-13.7S22.5,1.6,14.9,1.6z M21.7,15.7
                                    c0,0.7-0.6,1.3-1.3,1.3H9.2c-0.7,0-1.3-0.6-1.3-1.3v-1.5c0-0.7,0.6-1.3,1.3-1.3h11.1c0.7,0,1.3,0.6,1.3,1.3V15.7z"/>
                                    </svg>
                                </span>
                                <p :class="{ 'ui-color-danger' :  adults + childs + guests < 1 }" class="ui-font-medium-size" style="width: 10px;">{{ adults }}</p>
                                <span v-on:click="addAdults()" class="ui-margin-left ui-flex ui-align-items">
                                    <svg viewBox="0 0 30 30" style="width:22px;">
                                        <path class="fill-secondary ui-pointer" :class="{ 'fill-danger' : adults + childs + guests < 1 }" d="M15,2.5c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S22.2,2.5,15,2.5z M21.6,16.1c0,0.7-0.6,1.3-1.3,1.3H17
                                    v3.4c0,0.7-0.6,1.3-1.3,1.3h-1.5c-0.7,0-1.3-0.6-1.3-1.3v-3.4H9.8c-0.7,0-1.3-0.6-1.3-1.3v-1.5c0-0.7,0.6-1.3,1.3-1.3h3.1v-3
                                    c0-0.7,0.6-1.3,1.3-1.3h1.5c0.7,0,1.3,0.6,1.3,1.3v3h3.3c0.7,0,1.3,0.6,1.3,1.3V16.1z"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <!-- Fin Adultos -->
                        <!-- Jovenes -->
                        <div class="cotizator-button__option">
                            <div>
                                <h1>Jóvenes</h1>
                                <p class="ui-font-extra-small-size ui-color-grey">De 12 a 18 años</p>
                            </div>
                            <div class="ui-flex ui-align-items">
                                <span v-on:click="deleteChilds()" class="ui-margin-right ui-flex ui-align-items">
                                    <svg viewBox="0 0 30 30" style="width:22px;">
                                        <path class="fill-secondary ui-pointer" :class="{ 'fill-danger' : adults + childs + guests < 1 }" d="M14.9,1.6C7.4,1.6,1.3,7.7,1.3,15.2s6.1,13.7,13.7,13.7s13.7-6.1,13.7-13.7S22.5,1.6,14.9,1.6z M21.7,15.7
                                    c0,0.7-0.6,1.3-1.3,1.3H9.2c-0.7,0-1.3-0.6-1.3-1.3v-1.5c0-0.7,0.6-1.3,1.3-1.3h11.1c0.7,0,1.3,0.6,1.3,1.3V15.7z"/>
                                    </svg>
                                </span>
                                <p :class="{ 'ui-color-danger' :  adults + childs + guests < 1 }" class="ui-font-medium-size" style="width: 10px;">{{ childs }}</p>
                                <span v-on:click="addChilds()" class="ui-margin-left ui-flex ui-align-items">
                                    <svg viewBox="0 0 30 30" style="width:22px;">
                                        <path class="fill-secondary ui-pointer" :class="{ 'fill-danger' : adults + childs+ guests  < 1 }" d="M15,2.5c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S22.2,2.5,15,2.5z M21.6,16.1c0,0.7-0.6,1.3-1.3,1.3H17
                                        v3.4c0,0.7-0.6,1.3-1.3,1.3h-1.5c-0.7,0-1.3-0.6-1.3-1.3v-3.4H9.8c-0.7,0-1.3-0.6-1.3-1.3v-1.5c0-0.7,0.6-1.3,1.3-1.3h3.1v-3
                                        c0-0.7,0.6-1.3,1.3-1.3h1.5c0.7,0,1.3,0.6,1.3,1.3v3h3.3c0.7,0,1.3,0.6,1.3,1.3V16.1z"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <!-- Fin Jovenes -->
                        <!-- Niños -->
                        <div class="cotizator-button__option">
                            <div>
                                <h1>Niños</h1>
                                <p class="ui-font-extra-small-size ui-color-grey">De 2 a 12 años</p>
                            </div>
                            <div class="ui-flex ui-align-items">
                                <span v-on:click="deleteGuests()" class="ui-margin-right ui-flex ui-align-items">
                                    <svg viewBox="0 0 30 30" style="width:22px;">
                                        <path class="fill-secondary ui-pointer" :class="{ 'fill-danger' : adults + childs + guests  < 1 }" d="M14.9,1.6C7.4,1.6,1.3,7.7,1.3,15.2s6.1,13.7,13.7,13.7s13.7-6.1,13.7-13.7S22.5,1.6,14.9,1.6z M21.7,15.7
                                    c0,0.7-0.6,1.3-1.3,1.3H9.2c-0.7,0-1.3-0.6-1.3-1.3v-1.5c0-0.7,0.6-1.3,1.3-1.3h11.1c0.7,0,1.3,0.6,1.3,1.3V15.7z"/>
                                    </svg>
                                </span>
                                <p :class="{ 'ui-color-danger' :  adults + childs  + guests < 1 }" class="ui-font-medium-size" style="width: 10px;">{{ guests }}</p>
                                <span v-on:click="addGuests()" class="ui-margin-left ui-flex ui-align-items" :class="{ 'ui-visible' : adults +  childs < 1 }">
                                    <svg viewBox="0 0 30 30" style="width:22px;">
                                        <path class="fill-secondary ui-pointer" :class="{ 'fill-danger' : adults + childs + guests < 1 }" d="M15,2.5c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S22.2,2.5,15,2.5z M21.6,16.1c0,0.7-0.6,1.3-1.3,1.3H17
                                    v3.4c0,0.7-0.6,1.3-1.3,1.3h-1.5c-0.7,0-1.3-0.6-1.3-1.3v-3.4H9.8c-0.7,0-1.3-0.6-1.3-1.3v-1.5c0-0.7,0.6-1.3,1.3-1.3h3.1v-3
                                    c0-0.7,0.6-1.3,1.3-1.3h1.5c0.7,0,1.3,0.6,1.3,1.3v3h3.3c0.7,0,1.3,0.6,1.3,1.3V16.1z"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <!-- Fin Niños -->
                        <div class="cotizator-button__option">
                            <button class="ui-button-ghost ui-button-ghost--primary ui-button--long" @click="closeOptions">Aplicar</button>
                        </div>
                    </div>
                </span>
            </div>
            <!-- Fin Pasajeros -->
            <!-- Buscar -->
            <div class="cotizator-button__search ui-column-2 ui-align-items">
                <a href="#" style="margin-top: 27px;" class="ui-button ui-button--secondary">Buscar</a>
            </div>
            <!-- Fin Buscar -->
        </div>
	</div>
</template>
<script src="./Boton"></script>
