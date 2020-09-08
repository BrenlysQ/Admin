<template>

   <div class="dashboard">
     <center><div class="dashboard-content">
    	 <div class="dashboard-main">
	    	<img src="~@/assets/logo.svg">
    	 </div>

        <div><input type="text" name="" placeholder="Email" v-model="email"></div>
        <div><input type="password" name="" placeholder="password" v-model="password"></div>
        <div><button class="ui-button ui-button--primary" @click="mklogin">Ingresar</button></div>
    	  <div class="loader-user" v-if="infoLoaded ">
             <img src="@/assets/ajax-loader.gif" />
        </div>
         </div></center>
    </div>
   
</template>
<style type="text/css">
  .loader-user {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  } 

  .loader-user img {
    width:80px;
  }
</style>
<script src="./Login.js"></script>