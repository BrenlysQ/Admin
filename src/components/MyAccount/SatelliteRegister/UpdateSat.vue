<template>
	<div class="plus-movil">
		<div class="plus-movil__header">
			<center><h4  class="plus-color-secondary plus-center ui-margin-medium-bottom">Datos del satelite</h4></center>
		</div>
		
		<div id="afiliate" class="plus-movil__contacto">
			<form id="massive-satelite-form">
<div class="ui-row">
	                <div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Dominio del Satelite </label>
						<input type="text" class="ui-input"  name="name" v-model="satellite.domain">
					</div>
				</div>
				<div class="ui-column-6">
				<div class="ui-input-group">
					<label for="" class="ui-label"> Nombre del Satelite</label>
					<input type="text" class="ui-input" name="domain" v-model="satellite.name">					
				</div>
				</div>
			</div>
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">E-mail del Satelite</label>
						<input type="text" class="ui-input"  name="email_satellite" v-model="satellite.email_satellite">
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
					<label for="" class="ui-label"> Clave del Usuario</label>
					<input type="password" name="password" class="ui-input" v-model="satellite.password">
					</div>
				</div>
			</div>
			 <div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Nombre del Propietario</label>
						<input type="text" class="ui-input" name="name_responsable" v-model="satellite.name_responsable">					
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Identificacion del Propietario</label>
						<input type="text" class="ui-input" name="identification" v-model="satellite.identification" >
					</div>
				</div>
			</div>	
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">E-mail del Propietario</label>
						<input type="text" class="ui-input"  name="email_responsable" v-model="satellite.email_responsable">
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Direccion del Propietario</label>
						<input type="text" class="ui-input" name="address" v-model="satellite.address">
					</div>
				</div>
			</div>
			<div class="ui-row">	
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Telefono del Propietario</label>
						<input type="text" class="ui-input" name="telephone" v-model="satellite.telephone" >
					</div> 
				</div>  
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label  class="ui-label"> Moneda a Utilizar</label>
						<multiselect
						      v-model="satellite.currency_selected"
						      :options="currencies"
						      track-by="id"
						      :multiple="true"
						      label="name"
						      >
						    </multiselect>
                    </div>
					</div>
				</div>
			<div class="ui-row">	
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Gds a Utilizar </label>
							<multiselect
						      v-model="satellite.search_engine"
						      :options="gds"
						      track-by="id"
						      :multiple="true"
						      label="name"
						      >
						    </multiselect>
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
<script src="./Update.js"></script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
