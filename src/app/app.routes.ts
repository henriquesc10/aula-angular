import { Routes } from '@angular/router';
import { List } from './features/list/list';
import { Create } from './features/create/create';

export const routes: Routes = [{
    path: '',
    component: List,
},
{
    path: 'create-product',
    component: Create,
}
];
