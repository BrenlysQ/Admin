<script src="./DetailsUser.js"></script>
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
					<label for="" class="ui-label"> Nombe del Usuario</label>
				<input  disabled type="text" class="ui-input" name="name" v-model="user.name">					
				</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">E-mail del Usuarios</label>
						<input  disabled type="text" class="ui-input"  name="email" v-model="user.email">
					</div>
				</div>
			</div>
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
					<label for="" class="ui-label"> Clave del Usuario</label>
					<input  disabled type="password" autocomplete="false" name="password" class="ui-input" v-model="user.password">
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
						      :disabled="true" >
						    </multiselect>
						<!-- <select disabled="true" type="text" class="ui-input" name="rol" v-model="user.rol">
							<option value="Administrator" name="rol">Administrativo</option>
							<option value="Satellite" name="rol">Operaciones</option>
							<option value="Freelance" name="rol">Ventas</option>
						</select>	 -->				
					</div>
				</div>
			</div>
			 <div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Genero </label>
						<select disabled="true" type="text" class="ui-input" name="gender" v-model="user.gender">
							<option value="f" name="gender">Femenino</option>
							<option value="m" name="gender">Masculino</option>
						</select>						
					</div>
				</div> 
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label  for="" class="ui-label">Fecha de Nacimiento</label>
						<datepicker  disabled input-class="ui-input" v-model="user.birth" :disabledDates="disabled"></datepicker>
					</div>
				</div>
			</div>	
					<div class  ="plus-movil__boton__submit">
					<center>
						<span class="ui-button ui-button--secondary" @click="$router.go(-1)">Volver</span>
					</center>
			</div>
		</form>	
	</div>
   </div>				
</template>