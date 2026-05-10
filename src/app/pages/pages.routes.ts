import { Routes } from '@angular/router';
import { AppLayout } from '@/layout/component/layout.component';

export default [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: '',
                loadChildren: () => import('./admin/admin.routes').then((m) => m.default)
            }
        ]
    }
] as Routes;
