import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule  } from './shared/shared.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// import { LayoutComponent } from './whitelist/layout/layout.component';
// import { WhitelistRoutingModule } from './whitelist/whitelist-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // LayoutComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    AppRoutingModule,
    // WhitelistRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
