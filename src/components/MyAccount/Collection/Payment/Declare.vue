<template>
	<div class="dashboard-declare ui-column-12">
		<div v-if="loaded_info" class="">
			<h2 class="dashboard-declare__title">Datos del pago</h2>

			<form accept-charset="UTF-8" action="/" id="payment-formbankt" method="post">
				<div class='ui-row'>

					<div class='ui-column-6'>
						<div class="ui-input-group">
	                        <label class="ui-label ui-color-secondary">Tipo de transacción</label>
							<select class="ui-input" name="type" id="type" v-model="type">
								<option selected="" value="1">Transferencia</option>
								<option value="2">Deposito</option>
							</select>
						</div>
					</div>

					<div class='ui-column-3'>
						<div class="ui-input-group">
		          <label class="ui-label ui-color-secondary">Fecha</label>
							<datepicker
									v-model="payment_date"
									name="uniquename"
									:disabledDates="disabled_dates"
									:format="customFormatter"
									:input-class="{'ui-color-primary': 'class', 'ui-input': 'class'}"
									>
							</datepicker>
						</div>
					</div>

				</div>

				<div class="ui-row">
					<div class='ui-column-6'>
						<div class="ui-input-group">
	                        <label class="ui-label ui-color-secondary">Banco de Origen</label>
							<select class="ui-input" name="current_bank" id="current_bank" v-model="current_bank">
								<option selected="" value="1">Mismo Banco</option>
								<option value="2">Otro Banco</option>
							</select>
						</div>
					</div>

					<div class='ui-column-6'>
						<div class="ui-input-group">
	            <label class="ui-label ui-color-secondary">Banco destino</label>
							<select class="ui-input" name="" v-model="bankid">
								<option value="0">Selecciona un banco</option>
								<option v-for="bank in book.currency_data.banksinfo" :value="bank.id">{{bank.name}}</option>
							</select>
						</div>
					</div>
				</div>

				<div class="ui-row">
					<div class='ui-column-4'>
						<div class="ui-input-group">
	                        <label class="ui-label ui-color-secondary">Número de confirmación</label>
							<input class='ui-input' data-rule-required="true" data-msg-required="Introduzca el numero de confirmacion" id="confirmation_number"
								v-model="confirmation_number" required name="confirmation_number" size='4' type='text'>
						</div>
					</div>
					<div class='ui-column-4'>
						<div class="ui-input-group">
              <label class="ui-label ui-color-secondary">Monto</label>
							<input class='ui-input' data-rule-required="true" data-msg-required="Introduzca el numero de confirmacion" id="amount_number" name="amount_number" required v-model="total_amount" type='text'>
						</div>
					</div>
					<div class="ui-column-4">
						<div class="ui-input-group">
		            <label class="ui-label ui-margin-small-bottom ui-color-secondary">Comprobante (ScreenShot)</label>
		            <input type="file" id="trans_file" ref="trans_file"/>
		        </div>
					</div>
				</div>
				<div class="ui-row">
					<div class='ui-column-3'>
						<div v-if="!sending_info">
							<a @click="declarePayment()" id="declare-btn" class="ui-button ui-button--secondary"><i class="fa fa-shopping-cart"></i>Declarar Pago</a>
						</div>
						<div v-else>
							<vue-loading type="bubbles" color="#003366" :size="{ width: '70px', height: '70px' }"></vue-loading>
						</div>
					</div>
				</div>
			</form>


		</div>
		<div v-else class="">
			<vue-loading type="bubbles" color="#003366" :size="{ width: '70px', height: '70px' }"></vue-loading>
			Cargando iformacion bancaria.
		</div>
		<simplert :useRadius="true"
          :useIcon="true"
          ref="simplert">
		</simplert>
	</div>
</template>
<script>
import moment from 'moment'
import vueLoading from 'vue-loading-template'
import UltraApi from '../../../UltraApi'
import Datepicker from 'vuejs-datepicker'
import Simplert from 'vue2-simplert'
	export default {
		props: {
			invoice: false,
			source: false
		},
		components: {
        Datepicker,
				Simplert,
				vueLoading,
    },
		data: function () {
			return {
				book: {},
				type: 1,
				bankid: 0,
				payment_date: '',
				current_bank: 1,
				confirmation_number: '',
				total_amount: 0,
				disabled_dates: {
						from: moment().toDate()
				},
				loaded_info : false,
				sending_info : false
			}
		},

		created: function () {
			this.loadInfo();
		},
		mounted: function () {
			if (this.leftToPay == 0) {
				$('#payment-btn').prop('disabled', true);
				// console.log('Sí pasa');
			}
		},
		methods: {
			loadInfo:function(){
				let url = 'invoice/info';
				UltraApi.call(this,url,{id:this.invoice.id},function(self,response){
					self.book = response.body;
					self.bankid = self.book.currency_data.banksinfo[0].id;
					self.total_amount = self.invoice.credit_note.total_amount;
					self.loaded_info = true;
				});
			},
			customFormatter(date) {
				return moment(date).format('ddd DD MMMM, YYYY');
			},
			validForm: function(){
				var message = '';
				if (this.book.currency == 4) {
					var currency = '$ ';
				} else {
					var currency = 'Bs '
				}
				if (this.total_amount > this.invoice.credit_note.total_amount) {
						var title = 'Monto excedido';
						message = 'El monto ingresado excede el monto restante por pagar de ' + currency + this.invoice.credit_note.total_amount;
				} else if (this.total_amount == 0) {
						var title = 'Monto inválido';
						message = 'El monto a pagar no puede ser 0';
				} else if (this.bankid == 0) {
						var title = 'Selecciona un banco';
						message = 'El banco seleccionado es invalido';
				}else if (this.payment_date == '' || new Date(this.payment_date) > new Date()) {
						var title = 'Fecha Inválida';
						message = 'Debe ingresar una fecha de transferencia válida';
				} else if (this.confirmation_number == '') {
						var title = 'Número de confirmación inválido';
						message = 'Debe ingresar un número de confirmación';
				}else {
					return true;
				}
				var alert_info = {
				   title: title,
				   message: message,
				   type: 'error'
				};
				this.$refs.simplert.openSimplert(alert_info);
				return false;
			},
			declarePayment: function () {
				if (!this.validForm()) {
					return false;
				} else {
					var data = {
						'type': this.type,
		        'payment_date': moment(this.payment_date).format('YYYY-MM-DD'),
		        'current_bank': this.current_bank,
		        'bankid': this.bankid,
		        'invoiceid': this.invoice.id,
		        'confirmation_number': this.confirmation_number,
		        'totpay': this.total_amount,
		        'pgateway': 3
					};
					console.log('data',data);
					this.sending_info = true;
					var file = this.$refs.trans_file.files[0];
					let formData = new FormData();
	        formData.append('type', this.type);
					formData.append('current_bank', this.current_bank);
					formData.append('bankid', this.bankid);
					formData.append('invoiceid', this.invoice.id);
					formData.append('confirmation_number', this.confirmation_number);
					formData.append('totpay', this.total_amount);
					formData.append('pgateway', 3);
	        formData.append('payment_date',moment(this.payment_date).format('YYYY-MM-DD'));
					formData.append('transfer_file', file);
					UltraApi.call(this,'bankstransfer/add',formData,function(self,response){
						var alert_info = {
						   title: 'Transacción Exitosa',
						   message: 'Su transacción por ' + response.body.invoice.currency.code_visible + ' ' + response.body.invoice.amount +
		 										' ha sido procesada exitosamente.',
						   type: 'success'
						};
						self.sending_info = false;
						self.$refs.simplert.openSimplert(alert_info);

					});
					// console.log('data: ', data);
					// this.$http.post('../declarePayment', data).then(
					// 	function (response) {
					// 		response.body = this.checkForJsonParse(response);
					// 		$('#declare-btn span').text('Declarar Pago')
					// 		$('#declare-btn i').removeClass('fa-spinner fa-pulse').addClass('fa-credit-card');
					// 		if (response.body.payment == true) {
					// 			if (response.body.invoice.invoice.total_amount - response.body.invoice.invoice.total_paid > 0) {
					// 				vueins.total_amount = response.body.invoice.invoice.total_amount - response.body.invoice.invoice.total_paid;
					// 				$('#declare-btn').prop('disabled', false);
					// 			} else {
					// 				vueins.total_amount = 0;
					// 			}
					// 			swal2(
					// 				'Transacción Exitosa',
					// 				'Su transacción por ' + response.body.invoice.currency.code_visible + ' ' + response.body.invoice.amount +
					// 				' ha sido procesada exitosamente.',
					// 				'success'
					// 			);
					// 		} else {
					// 			$('#declare-btn').prop('disabled', false);
					// 			swal2(
					// 				'Error en la transacción',
					// 				'Su pago no ha sido procesado correctamente. Intente nuevamente en breve. De persistir el problema, contacte a su representante de ventas.',
					// 				'error'
					// 			);
					// 		}
					// 	});
				}
			},
		}
	}

</script>
