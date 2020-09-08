<template>
    <div class="dashboard-header">
    
        <!-- Begin brand -->
    
        <div class="dashboard-brand" :class="{ collapse: isCollapse}">
    
            <img src="~@/assets/logo.svg" v-if="isCollapse == false">
    
            <!--Begin Toggle Desktop -->
    
            <a href="#" class="toggle-menu ui-hidden-movil" @click="itemCollapse()" :class="{ open: isCollapse}">
    
                <span class="toggle-menu__item"></span>
    
                <span class="toggle-menu__item"></span>
    
                <span class="toggle-menu__item"></span>
    
            </a>
    
            <!-- End Toggle Desktop -->
    
        </div>
    
        <!-- End Header -->
    
        <!-- Begin Navbar-->
    
        <div class="dashboard-navbar">
    
            <ul class="dashboard-navbar__left">
    
                <li class="dashboard-navbar__list" v-for="itemNav in itemsNav" :key="itemNav.id">
    
                    <a href="#" class="dashboard-navbar__link"> {{ itemNav.link }} </a>
    
                </li>
    
            </ul>
    
            <ul class="dashboard-navbar__right">
    
                <li class="dashboard-navbar__list" v-on-clickaway="closeEvent">
    
                    <a href="#" class="dashboard-navbar__avatar" @click="dropProfile()">
    
                        <img src="~@/assets/avatar.png">
    
                    </a>
    
                    <div class="dashboard-navbar__dropdown" :class="{ open : isDropProfile }">
    
                        <a href="http://">Perfil</a>
    
                        <a href="http://" @click="logout" >Logout</a>
    
                    </div>
    
                </li>
    
                <li class="dashboard-navbar__list">
    
                    <a href="#" class="dashboard-navbar__icons" @click="showMessage()">
    
                        <icon-square fillPrimary="fill-primary" fillSecondary="fill-secondary" iconWidth="30">
    
                        </icon-square>
    
                        <div class="dashboard-navbar__message" :class="{ open : isMessage }">
    
                            <a href="http://">Perfil</a>
    
                           <!--  <div @click="isMessage == false">Cerrar</div> -->
    
                           <div> <a href="http://" @click="logout" >Logout</a></div>
    
                        </div>
    
                    </a>
    
                </li>
    
            </ul>
    
        </div>
    
        <!-- End Navbar -->
    
    </div>
</template>

<script src="./Navbar"></script>
