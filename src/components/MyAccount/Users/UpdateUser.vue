<template>
	<div class="plus-movil">
		<div class="plus-movil__header">
			<center><h4  class="plus-color-secondary plus-center ui-margin-medium-bottom">Datos del Usuario</h4></center>
		</div>
		
		<div id="afiliate" class="plus-movil__contacto">
			<form id="massive-Usuarios-form">

			<div class="ui-row">
				<div class="ui-column-6">
				<div class="ui-input-group">
					<label for="" class="ui-label"> Nombre del Usuario</label>
				<input type="text" class="ui-input" name="name" v-model="user.name">					
				</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">E-mail del Usuarios</label>
						<input type="text" class="ui-input"  name="email" v-model="user.email">
					</div>
				</div>
			</div>
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
					<label for="" class="ui-label"> Clave del Usuario</label>
					<input type="password" autocomplete="false" name="password" class="ui-input" v-model="user.password">
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Rol del Usuario </label>
							<multiselect
						      v-model="user.rol" 
						      :options="roles"
						      track-by="id"
						      :multiple="true"
						      label="name"
						      >
						    </multiselect>
					<!-- 	<select name="rol" id="rol" class="ui-input" v-model="user.rol" v-if="rolesLoaded">
                            <option v-for="rol in roles" :value="rol.id"> {{ rol.name }}</option>
                      	</select> -->					
					</div>
				</div>
			</div>
			 <div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Genero </label>
						<select type="text" class="ui-input" name="gender" v-model="user.gender">
							<option value="f" name="gender">Femenino</option>
							<option value="m" name="gender">Masculino</option>
						</select>						
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Fecha de Nacimiento</label>
						<datepicker input-class="ui-input" v-model="user.birth" :disabledDates="disabled"></datepicker>
					</div>
				</div>
			</div>	
			<div class  ="plus-movil__boton__submit">
					<center>
						<span class="ui-button ui-button--secondary" @click="$router.go(-1)">Volver</span>
						<span class="ui-button ui-button--secondary" id="bSubmit" name="bSubmit" @click="sendStuff">Actualizar</span>
					</center>
			</div>
		</form>	
	</div>
   </div>	
	                
</template>
<script src="./UpdateUser.js"></script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

