 <template>
	<div class="plus-movil">
		<div class="plus-movil__header">
			<center><h4  class="plus-color-secondary plus-center ui-margin-medium-bottom">Datos del Freelance</h4></center>
		</div>
		
		<div id="afiliate" class="plus-movil__contacto">
			<form id="massive-Freelance-form">
<div class="ui-row">
	                <div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Nombre del Freelance </label>
						<input type="text" class="ui-input"  name="name" v-model="freelance.name">
					</div>
				</div>
				<div class="ui-column-6">
				<div class="ui-input-group">
					<label for="" class="ui-label"> Apellido del Freelance</label>
					<input type="text" class="ui-input" name="lastname" v-model="freelance.lastname">					
				</div>
				</div>
			</div>
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">E-mail del Freelance</label>
						<input type="text" class="ui-input"  name="email" v-model="freelance.email">
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
					<label for="" class="ui-label"> Telefono del Freelance</label>
					<input type="number" name="phone" class="ui-input" v-model="freelance.phone">
					</div>
				</div>
			</div>

			<div class="ui-row">
			<div class="ui-column-6">
				<div class="ui-input-group">
					<label for="" class="ui-label"> Genero</label>
					<select type="text" class="ui-input" name="gender" v-model="freelance.gender">
							<option value="F" name="gender">Femenino</option>
							<option value="M" name="gender">Masculino</option>
						</select>
				</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
					<label for="" class="ui-label"> Satelite id</label>
					<input type="number" autocomplete="false" name="satellite" class="ui-input" v-model="freelance.satellite">
					</div>
				</div>
			</div>
			<div class="ui-row">
					<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Imagen de Identificacion </label>
						<input type="text" class="ui-input" name="idimage" v-model="freelance.idimage">
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Imagen </label>
						<input type="text" class="ui-input" name="image" v-model="freelance.image">
					</div>
				</div>
			</div>	
			 <div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Ciudad del Freelance</label>
						<input type="text" class="ui-input" name="city" v-model="freelance.city">					
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Pais del Freelance</label>
						<input type="text" class="ui-input" name="country" v-model="freelance.country" >
					</div>
				</div>
			</div>	
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Latitud </label>
						<input type="text" class="ui-input" name="latitude" v-model="freelance.latitude">
					</div>
				</div>
		      <div class="ui-column-6">
						<div class="ui-input-group">
							<label for="" class="ui-label"> Longitud</label>
							<input type="text" class="ui-input" name="longitude" v-model="freelance.longitude">
						</div>
					</div>
			</div>
			<div class="ui-row">
		    <div class="ui-column-6">
						<div class="ui-input-group">
							<label for="" class="ui-label"> Sitio Web</label>
							<input type="text" class="ui-input" name="website" v-model="freelance.website">
						</div>
					</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Cover </label>
						<input type="text" class="ui-input" name="cover" v-model="freelance.cover">
					</div>
				</div>
			</div>
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Facebook </label>
						<input type="text" class="ui-input" name="facebook" v-model="freelance.facebook">
					</div>
				</div>
		      <div class="ui-column-6">
						<div class="ui-input-group">
							<label for="" class="ui-label"> Twitter</label>
							<input type="text" class="ui-input" name="twitter" v-model="freelance.twitter">
						</div>
					</div>
			</div>
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Instagram </label>
						<input type="text" class="ui-input" name="instagram" v-model="freelance.instagram">
					</div>
				</div>
		   <div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Identificacion de la cuenta </label>
						<input type="number" class="ui-input" name="accountid" v-model="freelance.accountid">
					</div>
			</div>
			</div>
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Propietario </label>
						<input type="text" class="ui-input" name="accountowner" v-model="freelance.accountowner">
					</div>
				</div>
		   <div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Codigo </label>
						<input type="number" class="ui-input" name="code" v-model="freelance.code">
					</div>
			</div>
			</div>
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> bank_name </label>
						<input type="text" class="ui-input" name="bank_name" v-model="freelance.bank_name">
					</div>
				</div>
		   <div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> accounttype </label>
						<input type="text" class="ui-input" name="accounttype" v-model="freelance.accounttype">
					</div>
			</div>
			</div>
		<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> Identificacion del freelance </label>
						<input type="number" class="ui-input" name="identification" v-model="freelance.identification">
					</div>
				</div>
<!-- 		   <div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label"> accounttype </label>
						<input type="text" class="ui-input" name="accounttype" v-model="freelance.accounttype">
					</div>
			</div> -->
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
<script src="./updatefree.js"></script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
