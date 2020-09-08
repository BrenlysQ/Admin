<template>
    <div class="ctz-response">
        <!-- Salida -->
        <div class="ui-row">
    
            <div class="ui-column-9">
                
                <div class="ctz-response__item ui-margin-large-bottom">

                    <div class="ui-row">
        
                        <div class="ui-column-12">
        
                            <div class="ctz-response__departure">
        
                                <h3 class="ctz-response__title ctz-response__title--secondary ui-margin-small-right">Salida</h3>
        
                                <div class="ctz-response__airline">
        
                                    <img src="@/assets/wq.png">
        
                                </div>
        
                            </div>
        
                        </div>
        
                    </div>
        
                    <div class="ui-row ui-align-items">
        
                        <div class="ui-column-1">
        
                            <div class="ui-radio ui-margin-small-right" >
        
                                <input type="radio" id="radio-11" name="selector2" checked/>
        
                                <label for="radio-11" @click="selected()"></label>
        
                            </div>
        
                        </div>
        
                        <div class="ui-column">
        
                            <p class="ctz-response__title">09: 40</p>
        
                        </div>
        
                        <div class="ui-column-3">
        
                            <div class="ctz-response__destination">
        
                                <h3 class="ctz-response__title ctz-response__title--primary">CSS</h3>
        
                                <div class="ctz-response__stop">
        
                                    <div class="ctz-response__scales">
        
                                        <p class="ctz-response__scales__text">MIA</p>
        
                                        <p class="ctz-response__scales__text">PTY</p>
        
                                    </div>

                                    <span class="ctz-response__line"></span>
        
                                </div>
        
                                <h3 class="ctz-response__title ctz-response__title--primary">MIA</h3>
        
                            </div>
        
                        </div>
        
                        <div class="ui-column">
        
                            <p class="ctz-response__title">09: 40</p>
        
                        </div>
        
                        <div class="ui-column-2">
        
                            <h2 class="ui-font-small-size">9h 16min</h2>
        
                        </div>
        
                        <div class="ui-column-2">
        
                            <h2 class="ui-color-danger ui-font-small-size">1 Stop</h2>
        
                        </div>
        
                        <div class="ui-column-1">
        
                            <h2 class="ui-color-secondary ui-font-small-size">Economy</h2>
        
                        </div>
        
                    </div>

                </div>

            </div>
    
            <div class="ui-column-3">
    
                <div class="ctz-response__price">
    
                    <h3 class="ctz-response__price__title ui-margin-small-bottom">$ 275.14</h3>
    
                    <span class="ui-button-ghost ui-button-ghost--primary">Seleccionar</span>
    
                </div>
    
            </div>
    
        </div>

        <!-- Retorno -->
        <div class="ui-row">
    
            <div class="ui-column-9">
                
                <div class="ctz-response__item">

                    <div class="ui-row">
        
                        <div class="ui-column-12">
        
                            <div class="ctz-response__departure">
        
                                <h3 class="ctz-response__title ctz-response__title--secondary ui-margin-small-right">Retorno</h3>
        
                                <div class="ctz-response__airline">
        
                                    <img src="@/assets/wq.png">
        
                                </div>
        
                            </div>
        
                        </div>
        
                    </div>
        
                    <div class="ui-row ui-align-items">
        
                        <div class="ui-column-1">
        
                            <div class="ui-radio ui-margin-small-right">
        
                                <input type="radio" id="radio-11" name="selector2" checked/>
        
                                <label for="radio-11"></label>
        
                            </div>
        
                        </div>
        
                        <div class="ui-column">
        
                            <p class="ctz-response__title">09: 40</p>
        
                        </div>
        
                        <div class="ui-column-3">
        
                            <div class="ctz-response__destination">
        
                                <h3 class="ctz-response__title ctz-response__title--primary">CSS</h3>
        
                                <div class="ctz-response__stop">
        
                                    <div class="ctz-response__scales">
        
                                        <p class="ctz-response__scales__text">MIA</p>
        
                                        <p class="ctz-response__scales__text">PTY</p>
        
                                    </div>

                                    <span class="ctz-response__line"></span>
        
                                </div>
        
                                <h3 class="ctz-response__title ctz-response__title--primary">MIA</h3>
        
                            </div>
        
                        </div>
        
                        <div class="ui-column">
        
                            <p class="ctz-response__title">09: 40</p>
        
                        </div>
        
                        <div class="ui-column-2">
        
                            <h2 class="ui-font-small-size">9h 16min</h2>
        
                        </div>
        
                        <div class="ui-column-2">
        
                            <h2 class="ui-color-danger ui-font-small-size">1 Stop</h2>
        
                        </div>
        
                        <div class="ui-column-1">
        
                            <h2 class="ui-color-secondary ui-font-small-size">Economy</h2>
        
                        </div>
        
                    </div>

                </div>

            </div>
    
        </div>

    </div>
</template>

<script src="./Response.js"></script>

