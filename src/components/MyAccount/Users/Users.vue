<template>
    <div class="ui-margin-large-top" style="padding:2rem;">
      <div class="ui-margin-large-bottom">
        <div class="ui-row form-collection">
          <div class="ui-column-12">
          <!--   <center><h4  class="plus-color-secondary plus-center ui-margin-medium-bottom">Datos de Usuarios</h4></center> -->
            <div class="ui-input-group">
               <label class="ui-label ui-margin-small-bottom ui-color-secondary">Usuario</label>
                <vue-tags-input
                  placeholder="Usuarios"
                  v-model="tag_user"
                  :tags="parameters.useers"
                  :add-only-from-autocomplete="true"
                  :autocomplete-items="parameters.users_autocomplete">
                </vue-tags-input>
            </div>
          </div>
        </div>
        <div class="ui-row">
         <router-link to="affiliateUser">
              <button class="ui-button ui-button--secondary">Registrar Nuevo Usuario</button> 
          </router-link>
        </div>
        <div class="detailed_debt">
            <div class="loader-satelite" v-if="!infoLoaded">
                <img src="@/assets/ajax-loader.gif" />
             </div>
             
            <table class="ui-tables"  v-else>
              <thead>
                  <tr>
                      <th class="ui-color-secondary">Nombre</th>
                      <th class="ui-color-secondary">Correo</th>
                      <th class="ui-color-secondary">Tipo</th>
                      <th class="ui-color-secondary">Creado</th>
                      <th class="ui-color-secondary">Acciones</th>
                  </tr>
              </thead> 
              <tbody>
                <tr v-for="(user, index) in users" :key="'U-' + user.id" v-show="index < 5 || showAllUser">
                    <td>{{ user.name }}</td>
                    <td>
                      {{user.email}}
                    </td>
                    <td>{{ getRoles(user.roles20) }}</td>
                    <td><span v-if="user.created_at">{{ formatOut(user.created_at) }}</span></td>
                    <td>
                      <ul class="actions">
                        <li>
                           <router-link :to="{name: 'DetailsUser', params:{usuario:user}}">
                            <a href="javascript:void(0)" class="btn btn-primary">Detalles</a>
                          </router-link>
                         <!--  <a href="javascript:void(0)" class="btn btn-danger" @click="">Detalles</a>
                        </li> -->
                        <li>
                          <!--  <a href="javascript:void(0)" class="btn btn-danger" @click="">Editar</a> -->
                         <router-link :to="{name: 'UpdateUser', params:{usuario:user}}">
                            <a href="javascript:void(0)" class="ui-color-secondary">Editar</a>
                          </router-link>
                        </li>
                          <!--  <a href="javascript:void(0)" class="btn btn-danger" @click="">Eliminar</a> -->
                          <a href="javascript:void(0)" class="ui-color-danger" @click="deleteUser(user,index)"> Eliminar</a>
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

<script src="./users.js"></script>
<style type="text/css">
  .loader-satelite {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  } 

  .loader-satelite img {
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