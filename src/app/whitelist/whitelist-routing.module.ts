import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { BrokerageUploadComponent } from './pages/brokerage-upload/brokerage-upload.component';

const wroutes: Routes = [
  {
    path: "home",
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
    ]
  },
  // { path: 'brokerage-upload', component: BrokerageUploadComponent },
  { path: '', component: BrokerageUploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(wroutes)],
  exports: [RouterModule]
})
export class WhitelistRoutingModule { }
