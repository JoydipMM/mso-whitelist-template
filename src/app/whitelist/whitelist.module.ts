import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WhitelistRoutingModule } from './whitelist-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AmcCardComponent } from './components/amc-card/amc-card.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AmcCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WhitelistRoutingModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class WhitelistModule { }
