import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule }   from '@angular/forms';

import { WhitelistRoutingModule } from './whitelist-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AmcCardComponent } from './components/amc-card/amc-card.component';
import { CreatedFilterComponent } from './components/created-filter/created-filter.component';
import { ShortingFilterComponent } from './components/shorting-filter/shorting-filter.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AmcCardComponent,
    CreatedFilterComponent,
    ShortingFilterComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WhitelistRoutingModule,
    FormsModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class WhitelistModule { }
