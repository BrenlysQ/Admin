<template>
    <div class="dashboard-sidebar" :class="{'collapse': isCollapse ? 'collapse': isSidebar}">
        <div class="dashboard-sidebar__backdrop">
            <ul class="dashboard-sidenav">
                <!--   <li class="dashboard-sidenav__list" v-for="menu in menus_sides" v-if="" > -->

                <li class="dashboard-sidenav__list" v-for="menu in menus_sides" v-if="checkForUser(menu.id)">

                  <a v-if="menu.childs.length > 0" href="javascript:void(0)" class="dashboard-sidenav__link" :class="{ collapse: isCollapse}" @click="sub_menu = menu.sub_menu">

                    <icon-shop fillPrimary="fill-primary" fillSecondary="fill-secondary" iconWidth="20">
                    </icon-shop>
                    <span v-if="isCollapse == false" class="ui-margin-left">{{menu.title}}</span>
                  </a>
                  <ul  v-if="menu.childs.length > 0"class="sub_menu" v-show="sub_menu == menu.sub_menu">
                    <li  v-for="child in menu.childs" class="dashboard-sidenav__list">
                        <router-link :to="child.route" class="dashboard-sidenav__link" :class="{collapse: isCollapse}" @click.native="routeTitle(child.title1, child.title2)">
                            <span v-if="isCollapse ==false" class="ui-margin-left">{{child.title}}</span>
                        </router-link>
                    </li>
                  </ul>

                  <router-link v-else :to="menu.route"  class="dashboard-sidenav__link" :class="{ collapse: isCollapse}" @click.native="routeTitle(child.title1, child.title2)">
                        <icon-cotizador fillPrimary="fill-primary" fillSecondary="fill-secondary" iconWidth="20">
                        </icon-cotizador>
                        <span v-if="isCollapse == false" class="ui-margin-left">{{menu.title}}</span>
                    </router-link>
                </li>

                <li class="dashboard-sidenav__list">
                    <a href="javascript:void(0)" class="dashboard-sidenav__link" :class="{ collapse: isCollapse}" @click="logout">
                        <icon-shop fillPrimary="fill-primary" fillSecondary="fill-secondary" iconWidth="20">
                        </icon-shop>
                        <span v-if="isCollapse == false" class="ui-margin-left">Salir</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script src="./Sidebar"></script>