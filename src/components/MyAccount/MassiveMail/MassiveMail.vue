<template>
	<div class="plus-movil">
		<div class="plus-movil__header">
			<!-- <div class="plus-movil-brand">
				<img src="/img/logo.svg" alt="logo">
			</div> -->
			<center><h3  class="plus-color-secondary plus-center ui-margin-medium-bottom">Correo Masivo</h3></center>
		</div>
		
		<div id="afiliate" class="plus-movil__contacto">
			<form id="massive-mail-form">

			 <div class="ui-row">
	                <div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Correo de origen</label>
						<select name="from" class="ui-input" v-model="mail.from">
							<option value="1">Ana</option>
							<option value="2">Will I Am</option>
						</select>
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Asunto</label>
						<input type="text" class="ui-input"  name="subject" v-model="mail.subject">
					</div>
				</div>
			</div>
			 <div class="ui-row">
			 	<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Nombre de la campaña</label>
						<input type="text" class="ui-input"  name="nameCampaign" v-model="mail.nameCampaign">
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Id de la campaña</label>
						<input type="text" class="ui-input" name="idCampaign" v-model="mail.idCampaign">
					</div>
				</div>
			</div>
			 <div class="ui-row">
			 	<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Header Mail</label>
					<input type="text" class="ui-input" name="header" v-model="mail.header">
					</div> 
				</div>  
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Titulo del header</label>
						<input type="text" class="ui-input" name="titleheader" v-model="mail.titleheader">
					</div>
				</div> 
			</div>	
			<div class="ui-row">	
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Dirigido a:</label>
						<select name="to" class="ui-input" v-model="mail.to">
							<option value="1">Maracay</option>
							<option value="2">Caracas</option>
							<option value="3">Barquisimeto</option>
						</select>
					</div>
				</div>	
					<div class="ui-column-6">
						<div class="ui-input-group">
						<label for="" class="ui-label">Fecha</label>
						<input type="date" name="date" class="ui-input"  v-model="mail.date">
						</div>
					</div>
			</div>
			<div class="ui-row">	
				<div class="ui-column-6">
					<div class="ui-input-group">
					<label for="" class="ui-label">Enviado por:</label>
					<input type="text" name="sentby" class="ui-input" v-model="mail.sentby">
					</div>
				</div>
				<div class="ui-column-6">	
					<div class="ui-input-group">
					<label for="" class="ui-label">Fecha de Finalizacion</label>
					<input type="date" name="dateend" class="ui-input" v-model="mail.dateend">
					</div>
				</div>
			</div>
			<div class="ui-row">
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Status</label>
						<select name="status" class="ui-input" v-model="mail.status">
							<option value="1">Pendiente</option>
							<option value="2">Enviado</option>
							<option value="3">Pausado</option>
						</select>
					</div>
				</div>
				<div class="ui-column-6">
					<div class="ui-input-group">
						<label for="" class="ui-label">Contenido</label>
						<textarea type="text" rows="15" class="ui-input" name="content" v-model="mail.content"></textarea>
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

			<div class  ="plus-movil__boton__submit">
					<center><span class="ui-button ui-button--secondary" id="bSubmit" name="bSubmit" v-on:click="sendStuff">Enviar</span></center>
			</div>
		</form>	
	</div>
   </div>		
</template>
<script src="./MassiveMail.js"></script>