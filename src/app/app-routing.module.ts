import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./modules/public/public.module').then((m) => m.PublicModule),
  // },
  { path: '**', redirectTo: 'admin' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
