import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
   
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'pages',        
        children: [
           
            {
                id   : 'users',
                title: 'Users',
                type : 'item',
                icon : 'person',
               
                url  : '/pages/Users'
            },
            
            
            {
                id   : 'clients',
                title: 'Clients',
                type : 'item',
                icon : 'person',
        
                url  : '/pages/Clients'
            },
            
           
        ]
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'group',
        icon    : 'web',
      
        children: [
           
            {
                id   : 'forms',
                title: 'Activité',
                type : 'item',
                icon : 'web_asset',
                url  : '/ui/forms'
            },
            {
                id   : 'projets',
                title: 'Produit',
                type : 'item',
                icon : 'add_shopping_cart',
                url  : 'ui/Products',
              
            },
            {
                id   : 'category',
                title: 'Catégorie',
                type : 'item',
                icon : 'category',
                url  : 'ui/Category',
              
            },
            {
                id   : 'gamme',
                title: 'Gamme',
                type : 'item',
                icon : 'branding_watermark',
                url  : 'ui/Gamme',
              
            },
            
            {
                id   : 'chat',
                title: 'Discussion',
                type : 'item',
                icon : 'chat_bubble_outline',
                url  : 'ui/Chat',
              
            },
            {
                id   : 'privelege',
                title: 'Privelege',
                type : 'item',
                icon : 'vpn_key',
                url  : 'ui/Privelege',
              
            },

           
        ]
    }

    
];
