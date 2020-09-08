<template>
  <div class="ui-margin-large-top" style="padding:2rem;">
      <div class="ui-margin-large-bottom">
        <div class="ui-row form-collection">
          <div class="ui-column-12">
           <!--  <center><h4  class="plus-color-secondary plus-center ui-margin-medium-bottom">Datos del freelance</h4></center> -->
              <div class="ui-input-group">
                 <label class="ui-label ui-margin-small-bottom ui-color-secondary">freelance</label>
                <vue-tags-input
                  placeholder="freelance"
                  v-model="tag_sat"
                  :tags="parameters.sat"
                  :add-only-from-autocomplete="true"
                  :autocomplete-items="parameters.sat_autocomplete">
                </vue-tags-input>
             </div>
          </div>
        </div>
        <div class="ui-row">
          <router-link to="/freelance">
              <button class="ui-button ui-button--secondary">Registrar Nuevo freelance</button> 
          </router-link>
        </div>
        <div class="detailed_debt" >
             <div class="loader-freelance" v-if="!infoLoaded">
                <img src="@/assets/ajax-loader.gif" />
             </div>

            <table class="ui-tables" v-else>
              <thead>
                  <tr>
                      <th class="ui-color-secondary">Nombre</th>
                      <th class="ui-color-secondary">Apellido</th> 
                      <th class="ui-color-secondary">E-amail</th>
                      <th class="ui-color-secondary">Tlf Propietario</th>
                      <th class="ui-color-secondary">Ciudad</th>
                      <th class="ui-color-secondary">Pais</th>
                      <th class="ui-color-secondary">Acciones</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="(freelance, index) in freelances" :key="'U-' + freelance.id" v-show="index < 10 || showAllUser" >
                    <td>{{freelance.name}}</td>
                    <td>{{freelance.lastname}}</td>
                    <td>{{freelance.email}}</td>
                    <td>{{freelance.phone}}</td>
                    <td>{{freelance.city}}</td>
                    <td>{{freelance.country}}</td>
                      <td>
                        <ul class="actions">
                        <li>
                          <router-link :to="{name: 'updatefree', params:{freelance:freelance}}">
                            <a href="javascript:void(0)" class="btn btn-primary">Editar</a>
                          </router-link>
                          <li>
                          <router-link :to="{name: 'detailfree', params:{freelance:freelance}}">
                            <a href="javascript:void(0)" class="ui-color-secondary">Detalles</a>
                         </router-link>
                         </li>
                         <a href="javascript:void(0)" class="ui-color-danger" @click="deleteFree(freelance,index)"> Eliminar</a>
                         </li>
                         </ul>
                      </td>
                </tr>
              </tbody>
            </table>
             <span class="more" v-if="!showAllUser" @click="showAllUser = true">Ver Mas</span>
            <span class="more" v-if="showAllUser" @click="showAllUser = false">Ver Menos</span>
          </div>
      </div>
    </div>
</template>
<script src="./freelanceList.js"></script>
<style type="text/css">
  .loader-freelance {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  } 

  .loader-freelance img {
    width:40px;
  }
  
 .more {
    width: 100%;
    display: block;
    text-align: center;
    color: #00baff;
    cursor: pointer;
  }
   .actions {
    display: flex;
  }

  .actions li{
    padding: 0 10px;
  }  

  .actions li:last-child {
    padding: 0;
  }
</style>

