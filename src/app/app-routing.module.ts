import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start/start.component'

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: StartComponent },
  { path: 'auth', loadChildren: () => import('src/app/routes/auth/auth/auth.module').then(m => m.AuthModule) },
  { path: 'client', loadChildren: () => import('src/app/routes/client/client/client.module').then(m => m.ClientModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
