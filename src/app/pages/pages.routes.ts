import { AppLayout } from '@/layout/component/layout.component';
import { Routes } from '@angular/router';

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
