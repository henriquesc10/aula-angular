import { Routes } from '@angular/router';
import { List } from './features/list/list';
import { getProducts } from './shared/resolvers/get-products.resolver';
import { getProduct } from './shared/resolvers/get-product.resolver';

export const routes: Routes = [
    {
        path: '',
        resolve: {
            produtcs: () => {
                products: getProducts
            }
        },
        component: List,
    },
    {
        path: 'create-product',
        loadComponent: () => import('./features/create/create').then(m => m.Create),
    },
    {
        path: 'edit-product/:id',
        resolve: {
            product: getProduct,
        },
        loadComponent: () => import('./features/edit/edit').then(m => m.Edit),
    },
];
