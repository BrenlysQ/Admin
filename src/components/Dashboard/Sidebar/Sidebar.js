import IconDashboard from '@/components/UI/UIIcons/IconDashboard.vue'
import IconCharts    from '@/components/UI/UIIcons/IconCharts.vue'
import IconEdit    from '@/components/UI/UIIcons/IconEdit.vue'
import IconShop    from '@/components/UI/UIIcons/IconShop.vue'
import IconUsers    from '@/components/UI/UIIcons/IconUsers.vue'
import IconCotizador   from '@/components/UI/UIIcons/IconCotizador.vue'
import UltraApi from '../../UltraApi'
export default {
    name: 'sidebar',
    components: {
        IconDashboard,
        IconCharts,
        IconEdit,
        IconShop,
        IconUsers,
        IconCotizador
    },
    props: {
        isSidebar: Boolean,
        isCollapse: Boolean,
    },
    data () {
        return {

            user: JSON.parse(localStorage.getItem('user_info')),
            response: false,
            sub_menu: '',
            menus_sides:
                [ 
                    {  
                        id: 1,                       
                        title :'Clientes',
                        icon: '',
                        roles : [1,3],
                        sub_menu:'affiliates_sub',
                        childs : [ 
                            { 
                                id: 2,                                
                                title : 'Gestionar ',
                                icon: '',
                                roles : [1,3],
                                title1:'Clientes',
                                title2:'Gestionar Clientes / Afiliados',
                                route : '/'
                            },
                            { 
                                id: 3,                                
                                title : 'Carga Masiva ',
                                icon: '',
                                roles : [1,3],
                                title1:'Clientes',
                                title2:'Cargar información',
                                route : '/asociates/loadfile'
                            },
                            { 
                                id: 4,                                
                                title : 'Consultar codigos ',
                                icon: '',
                                roles : [1,3],
                                title1:'Clientes',
                                title2:'Consulta de codigos',
                                route : '/asociates/codes'
                            }
                        ],
                        route :'/' 
                    },
                    {
                        id: 5,                      
                        title :'Cobranza',
                        icon: '',
                        roles : [1,3],
                        sub_menu:'collection_menu',
                        childs : [ 
                            { 
                                id: 6,                               
                                title : 'Reporte ',
                                icon: '',
                                roles : [1,3,2],
                                title1:'Cobranza',
                                title2:'Reporte general',
                                route : '/collection'
                            },
                            { 
                                id: 7,                               
                                title : 'Cargar data ',
                                icon: '',
                                roles : [1,3],
                                title1:'Cobranza',
                                title2:'Cargar Data',
                                route : '/collection/getdata'
                            },
                            {
                                id: 8,                               
                                title : 'Gestionar ',
                                icon: '',
                                roles : [1,3],
                                title1:'Cobranza',
                                title2:'Cargar información',
                                route : '/collection/process'
                            }
                                ],
                        route :'/' 
                    },
                    {
                        id: 9,                       
                        title :'Lineas de Credito',
                        icon: '',
                        roles : [1,3],
                        childs : [],
                        title1:'Líneas de Crédito',
                        title2:'Consultar Creditos',
                        route : '/credits'
                    },
                    {
                        id: 10,
                        title : 'Transferencias Bancarias',
                        icon: '',
                        roles : [1,3,2],
                        childs : [],
                        title1:'Transferencias Bancarias',
                        title2:'Consultar Transferencias', 
                        route : '/banktransfers'
                    },
                    {
                        id: 11,
                        title : 'Aerolineas',
                        icon: '',
                        roles : [1],
                        childs : [],
                        title1:'Perfil',
                        title2:'Editar Perfil', 
                        route : '/profile'
                    },
                    {
                        id: 12,
                        title :'Reporte de ventas' ,
                        icon: '',
                        roles : [1,3],
                        sub_menu: 'sales_reporte',
                        childs : [
                            {    
                                id:13,
                                title : 'Aereos ',
                                icon: '',
                                roles : [1,3],
                                title1:'Ventas',
                                title2:'Historial de Ventas', 
                                route : '/sales'
                            }
                                  ],
                        route : '/'
                    },
                    {
                        id: 14,
                        title :'Monitor Ventas' ,
                        icon: '',
                        roles : [1,3],
                        childs : [],
                        title1:'Ventas',
                        title2:'Historial de Ventas', 
                        route : '/sales'
                    },
                    {
                        id: 15,
                        title :'Masive Mails' ,
                        icon: '',
                        roles : [1,3],
                        childs : [],
                        title1:'Masive',
                        title2:'Historial Masive', 
                        route : '/sendmassives'
                    },    
                    {
                        id: 16,
                        title :'Usuarios' ,
                        icon: '',
                        roles : [1,3],
                        sub_menu:'affiliate_user',
                        childs : [
                             {
                                id: 17,
                                title : 'Usuario ',
                                icon: '',
                                roles : [1,3],
                                title1:'Usuarios',
                                title2:'Usuarios / Afiliatte',
                                route : '/users'
                             },
                             { 
                                id: 18,
                                title : 'Satelite',
                                icon: '',
                                roles : [1,3],
                                title1:'Usuarios',
                                title2:'Usuarios / Satelite',
                                route : '/satelliteList'
                             },
                             { 
                                id: 19,
                                title : 'Freelance ',
                                icon: '',
                                roles : [1,3],
                                title1:'Usuarios',
                                title2:'Freelance',
                                route : '/freelanceList'
                              }
                                 ],
                        route : '/'
                    },
                ],
            }
    },
    created(){
    },
    methods: {
             checkForUser(menus){
            
            let user_menu= this.user[1];
            let response = []
            let final=[]
            // console.log(menus);
            // console.log(user_menu);
              user_menu.forEach((menus) => {
               response.push(menus.id_menu)
             });
              final.push(response.includes(menus))
             return(final.includes(true)) ? true : false
        },
        //   checkForUser(roles){
            
        //     let user_menu= this.user[1];
        //     let response = []
        //     console.log(roles);
        //     console.log(user_menu);
        //      user_menu.forEach((menu) => {
        //        console.log(response.push(roles.includes(menu.id_rol)))//si en roles no esta el 3 no aparece
        //       });
        //     return(response.includes(true)) ? true : false
        // },
        // checkForUser(roles){
            
        //    let user_rol = this.user.data.roles20;
        //     let response = []
        //     user_rol.forEach((rol) => {
        //         response.push(roles.includes(rol.id))
        //     });
        //     return (response.includes(true)) ? true : false
        // },
        routeTitle: function (title, description) {
            this.sub_menu = ''; 
            this.$parent.dashboardTitle  = title
            this.$parent.dashboardDescription = description
        },
        logout: function(){
          UltraApi.logout(this);
        }
    }
}
