import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftmenuComponent } from './components/leftmenu/leftmenu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftmenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LeftmenuComponent,
  ],
})
export class SharedModule { }
