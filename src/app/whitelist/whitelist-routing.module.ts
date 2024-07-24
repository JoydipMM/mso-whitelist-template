import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';

const wroutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
    ]
  }
  // { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(wroutes)],
  exports: [RouterModule]
})
export class WhitelistRoutingModule { }
