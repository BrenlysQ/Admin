<script src="./Register.js"></script>
<template>
	<div class="plus-movil">
		<div class="plus-movil__header">
			<!-- <div class="plus-movil-brand">
				<img src="/img/logo.svg" alt="logo">
			</div> -->
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
						<input type="number" class="ui-input" name="identification" v-model="satellite.identification" >
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
						<input type="number" class="ui-input" name="telephone" v-model="satellite.telephone" >
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
						<!-- <select name="currency_selected" id="currency_selected" class="ui-input" v-model="satellite.currency_selected">
                                <option v-for="(currency, index) in currencies" :key="index" :value="currency">{{ currency.name }}</option>
                          </select> -->

                          <!--   <select name="currency_selected" id="currency_selected" v-model="currency_selected" class="ui-input">
                                <option v-for="(currency, index) in currencies" :key="index" :value="currency">{{ currency.name }}</option>
                            </select> -->
                    </div>
						<!-- <input type="checkbox" name="moneda"> USD &nbsp;&nbsp;&nbsp;
						<input type="checkbox" name="moneda" > MEX &nbsp;&nbsp;&nbsp;
						<input type="checkbox" name="moneda" > Bs.S &nbsp;&nbsp;&nbsp; -->
						<!-- <select name="to" class="ui-input" >							
							<option value="1">$</option>
							<option value="2">Bs</option>
						</select> -->
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
						<!-- <input type="checkbox" name="gds" value = "1"> Sabre &nbsp;&nbsp;&nbsp;
						<input type="checkbox" name="gds" value = "2" > Kiu &nbsp;&nbsp;&nbsp;
						<input type="checkbox" name="gds" value = "3" > Houtsa &nbsp;&nbsp;&nbsp;
						<input type="checkbox" name="gds" value = "4" > Amadeus&nbsp;&nbsp;&nbsp; -->
						<!-- <select name="gds" class="ui-input" >3							<option value="1">sabre</option>
							<option value="2">kiu</option>
							<option value="3">houtsa</option>
							<option value="3">amadeus</option>
						</select> -->
					</div>
				</div>
			</div>
			<!-- <div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Status</label>
						<select name="status" class="ui-input" v-model="satelite.status">
							<option value="1">Pendiente</option>
							<option value="2">Enviado</option>
							<option value="3">Pausado</option>
						</select>
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Contenido</label>
						<textarea type="text" rows="15" class="ui-input" name="content" v-model="satelite.content"></textarea>
					</div>
				</div>
			</div>
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group" v-for="n in files">
						<label for="" class="ui-label">Adjunto</label>
						<input type="file" class="ui-input" :id="'file_'+n" :name="'file_'+n" @change="files_to_upload(id)"> 
					</div>
				</div>	
				<div class="ui-column-6">
					<br><div class="ui-input-group">
						<a href="javascript:void(0)" class="btn btn-primary" @click="addFile('sum')">Agregar archivo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="javascript:void(0)" class="btn btn-primary" @click="addFile()" v-if="files > 1">Quitar archivo</a>
					</div></br>
				</div>
			</div>
 -->
			<div class  ="plus-movil__boton__submit">
					<center>
						<span class="ui-button ui-button--secondary" @click="$router.go(-1)">Volver</span>
						<span class="ui-button ui-button--secondary" id="bSubmit" name="bSubmit" @click="sendStuff">Enviar</span>
					</center>
			</div>
		</form>	
	</div>
   </div>				
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
