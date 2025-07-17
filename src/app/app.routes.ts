import { ActivatedRouteSnapshot, RedirectCommand, RouterStateSnapshot, Routes } from '@angular/router';
import { List } from './features/list/list';
import { Create } from './features/create/create';
import { Observable } from 'rxjs';
import { ProductsService } from './shared/services/products.service';
import { inject } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        resolve: {
            produtcs: () => {
                const productsService = inject(ProductsService);
                return productsService.getAll();
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
            product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
                const productsService = inject(ProductsService)
                return productsService.get(route.paramMap.get('id') as string);
            },
        },
        loadComponent: () => import('./features/edit/edit').then(m => m.Edit),
    },
];
