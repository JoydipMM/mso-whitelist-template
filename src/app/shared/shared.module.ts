import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftmenuComponent } from './components/leftmenu/leftmenu.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftmenuComponent
  ],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LeftmenuComponent,
    NgMultiSelectDropDownModule,
  ],
})
export class SharedModule { }
