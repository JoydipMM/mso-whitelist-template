import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
// { path: '', redirectTo: 'index', pathMatch: 'full' }, 
// { path: 'index', component: IndexComponent },
{ path: '', loadChildren: () => import('./whitelist/whitelist.module').then(module => module.WhitelistModule) },
];
@NgModule({
imports: [
    RouterModule.forRoot(routes)
],
exports: [
    RouterModule
],
providers: []
})
export class AppRoutingModule { }