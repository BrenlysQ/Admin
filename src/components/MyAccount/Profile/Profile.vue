<template>
    <div class="dashboard-profile">
    
        <div class="dashboard-profile__form">
    
            <div class="ui-padding-xlarge-left ui-padding-xlarge-right">
    
                <vue-tabs>
    
                    <v-tab title="Informacion Basica">
    
                        <div class="ui-row">
    
                            <div class="ui-column-6">
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Nombre</label>
    
                                    <input class="ui-input" placeholder="Jonh">
    
                                </div>
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Apellido</label>
    
                                    <input class="ui-input" placeholder="Doe">
    
                                </div>
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Telefono</label>
    
                                    <input class="ui-input" placeholder="04126948692">
    
                                </div>
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Ciudad</label>
    
                                    <input class="ui-input" placeholder="Guacara">
    
                                </div>
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Pais</label>
    
                                    <input class="ui-input" placeholder="Venezuela">
    
                                </div>
    
                                <button class="ui-button ui-button--secondary">Actualizar</button>
    
                            </div>
    
                            <div class="ui-column-2">
    
                            </div>
    
                            <div class="ui-column-4">
    
                                <div class="dashboard-profile__image">
    
                                    <img src="~@/assets/photo-default.png" alt="">
    
                                </div>
    
                                <h1 class="ui-h1 dashboard-profile__image-title">Cambiar Foto</h1>
    
                            </div>
    
                        </div>
    
                    </v-tab>
    
    
    
                    <v-tab title="Redes Sociales">
    
                        <div class="ui-row">
    
                            <div class="ui-column-6">
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Nombre</label>
    
                                    <input class="ui-input" placeholder="Jonh">
    
                                </div>
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Apellido</label>
    
                                    <input class="ui-input" placeholder="Doe">
    
                                </div>
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Telefono</label>
    
                                    <input class="ui-input" placeholder="04126948692">
    
                                </div>
    
                                <button class="ui-button ui-button--secondary">Actualizar</button>
    
                            </div>
    
                        </div>
    
                    </v-tab>
    
                    <v-tab title="Informacion General">
    
                        <div class="ui-row">
    
                            <div class="ui-column-6">
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Nombre</label>
    
                                    <input class="ui-input" placeholder="Jonh">
    
                                </div>
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Apellido</label>
    
                                    <input class="ui-input" placeholder="Doe">
    
                                </div>
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Telefono</label>
    
                                    <input class="ui-input" placeholder="04126948692">
    
                                </div>
    
                                <div class="ui-input-group">
    
                                    <label class="ui-label">Telefono</label>
    
                                    <input class="ui-input" placeholder="04126948692">
    
                                </div>
    
                                <button class="ui-button ui-button--secondary">Actualizar</button>
    
                            </div>
    
                        </div>
    
                    </v-tab>
    
                </vue-tabs>
    
            </div>
    
        </div>
    
    </div>
</template>

<script src="./Profile"></script>
